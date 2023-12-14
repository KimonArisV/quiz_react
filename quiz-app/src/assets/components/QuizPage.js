import {useState, useEffect} from "react";
import QuestionBlock from "./Question";
import {nanoid} from "nanoid";

//initialize the shuffler
const _ = require('lodash');

// export default function QuizPage(props){
export default function QuizPage() {

    //state hook for the list of questions we will get from fetching the api
    const [questionList, setquestionList] = useState([]);
    // needed to know when to refetch and when we already show the answers
    const [isAnswersVisible, setIsAnswersVisible] = useState(false);
    const [startNewGame, setStartNewGame] = useState(false);
    //needed to keep track of the players score
    const [score, setScore]=useState(0);
    //lets create a hook for the data used to create the questionlist
    const [fecthDataList, setFecthDataList] = useState([]);

    //making sure it only fectes data when we start a new game
    useEffect(()=>{
                //fecting the data from the API
                fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then( response => response.json())
                .then( data => setFecthDataList(formatMyData(data.results)));
                //reseting score in every new game
                setScore(0);
            },
        [startNewGame]
        );
        
    function formatMyData(dataArray) {
        let formattedData = dataArray.map((item) => {
            return {
            question:item.question,
            correct_answer: item.correct_answer,
            answers: _.shuffle([...item.incorrect_answers, item.correct_answer]),
            //score: 0,
            };
        });
        return formattedData;
    }     
 
    let Questions = fecthDataList.map((item,id)=>(
        <QuestionBlock 
            { ...item}
            key={nanoid()} 
            id={id} 
            isAnswersVisible={isAnswersVisible}
            startNewGame={startNewGame}
            setScore={()=>setScore(prevScore=>prevScore+1)}
        /> 
        )
    );
    console.log(Questions)
    return(
        <div id="game-container">
            {/* these will be the questions and choises */}
            {Questions}
            {/* this will be the button to check and restart */}
            {isAnswersVisible ?(
                <button className="CheckAnswerButton" onClick={()=>{
                    setStartNewGame(prevState => !prevState);
                    setIsAnswersVisible(prevState => !prevState);} }>
                Play Again
                </button>) : (
                <button className="CheckAnswerButton" onClick={()=>setIsAnswersVisible(prevState=>!prevState)}>
                Check Answers
                </button> 
                )
            }
            {/* this will show your score every time */}
            {isAnswersVisible && <p>You scored {score}/5</p>}
        </div>
    )
}