import {useState, useEffect} from "react";
import QuestionBlock from "./Question";
import {nanoid} from "nanoid";

// export default function QuizPage(props){
export default function QuizPage() {

    //state hook for the list of questions we will get from fetching the api
    const [questionList, setquestionList] = useState([]);
    // needed to know when to refetch and when we already show the answers
    const [isAnswersVisible, setisAnswersVisible] = useState(false);
    //needed to keep track of the players score
    const [score, setScore]=useState(0);
    //lets create a hook for the data used to create the questionlist
    const [fecthDataList, setFecthDataList] = useState([]);

    // lets create a function to map the data.results in the right format 
    //and remove the comonent from in the useEffect
    //const formatMyData = (MyDataArray)=> MyDataArray.map((element,id)=> (element.results[id]) );
    const formatMyData = (MyDataArray)=> Array(5).fill().map((_,id)=>MyDataArray.results[id]);
    //(MyDataArray.results) );
    //making sure it only fectes data when we start a new game
    useEffect(
        ()=>{
            if(!isAnswersVisible){
                //fecting the data from the API
                fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then( response => response.json())
                .then( data => setFecthDataList(formatMyData(data)));
                    // setquestionList(Array(5).fill().map((_,id) => 
                    // <QuestionBlock 
                    //     key={nanoid()} 
                    //     id={id} 
                    //     data={data.results[id]}
                    //     isAnswersVisible={isAnswersVisible}
                    //     setScore={()=>setScore(prevScore=>prevScore+1)}
                    // /> )));
                //reseting score in every new game
                setScore(0);
            };
        setquestionList(fecthDataList.map((element,id)=> <QuestionBlock 
                                    key={nanoid()} 
                                    id={id} 
                                    data={element} 
                                    isAnswersVisible={isAnswersVisible}
                                    setScore={()=>setScore(prevScore=>prevScore+1)} />))
        },
        // [props.startGame,isAnswersVisible]
        [isAnswersVisible]
        );

        // setquestionList(Array(5).fill().map((_,id) => 
        // <QuestionBlock 
        //     key={nanoid()} 
        //     id={id} 
        //     data={data.results[id]}
        //     isAnswersVisible={isAnswersVisible}
        //     setScore={()=>setScore(prevScore=>prevScore+1)}
        // /> ));
        //console.log(questionList)
    return(
        <div id="game-container">
            {/* these will be the questions and choises */}
            {questionList}
            {/* this will be the button to check and restart */}
            <button className="CheckAnswerButton" onClick={()=>setisAnswersVisible(prevState=>!prevState)}>
                {!isAnswersVisible ? "Check Answers" : "Play Again"}
            </button>
            {/* this will show your score every time */}
            {isAnswersVisible && <p>You scored {score}/5</p>}
        </div>
    )
}