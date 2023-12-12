import {useState, useEffect} from "react";
import QuestionBlock from "./Question";
import {nanoid} from "nanoid";

export default function QuizPage(props) {

    //state hook for the list of questions we will get from fetching the api
    const [questionList, setquestionList] = useState([]);
    // needed to know when to refetch and when we already show the answers
    const [isAnswersVisible, setisAnswersVisible] = useState(false);
    //needed to keep track of the players score
    const [score, setScore]=useState(0);

    //making sure it only fectes data when we start a new game
    useEffect(
        ()=>{
            if(!isAnswersVisible){
                //fecting the data from the API
                fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then( response => response.json())
                .then( data => setquestionList(()=>Array(5).fill().map((_,id) => 
                    <QuestionBlock 
                        key={nanoid()} 
                        id={id} 
                        data={data.results[id]}
                    /> )));
                //reseting score in every new game
                setScore(0);
            };
            },
        [props.startGame,isAnswersVisible]
        );

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