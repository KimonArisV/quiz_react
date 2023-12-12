import {useState, useEffect} from "react";
import QuestionBlock from "./Question";
import {nanoid} from "nanoid";

export default function QuizPage(props) {

    //function for the creation of components fo answers:
    // const firstdata = fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    //             .then( response => response.json())
    //             .then( data => data.results);
    // const createQuestionComponent = (_,id) => <QuestionBolck key={nanoid()} id={id} data={firstdata[id]} /> ;
    // const CreateQuestions = () => Array(5).fill().map(createQuestionComponent);
    // const CreateQuestions1 = ()=>{
    //         fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    //         .then( response => response.json()) 
    //         .then( data => setquestionList( data ))
    //     };
    const [questionList, setquestionList] = useState([]);
    const [isAnswersVisible, setisAnswersVisible] = useState(false);

    //console.log(questionList);
    useEffect(
        ()=>{
            if(!isAnswersVisible){
                //const newdata = 
                fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then( response => response.json())
                .then( data => setquestionList(()=>Array(5).fill().map((_,id) => <QuestionBlock key={nanoid()} id={id} data={data.results[id]} /> )));
                //console.log(questionList);
            };
            },
        [props.startGame,isAnswersVisible]
        );
    // useEffect(
    //     ()=>{},
    //     [questionList]
    // );

    return(
        <div id="game-container">
            {questionList}
            <button className="CheckAnswerButton" onClick={()=>setisAnswersVisible(prevState=>!prevState)}>
                {!isAnswersVisible ? "Check Answers" : "Play Again"}
            </button>
        </div>
    )
}