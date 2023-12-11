import {useState, useEffect} from "react";
import QuestionBolck from "./Question";
import {nanoid} from "nanoid";

export default function QuizPage() {

    //function for the creation of components fo answers:
    const createQuestionComponent = () => <QuestionBolck key={nanoid()} />;
    const CreateQuestions = () => Array(5).fill().map(createQuestionComponent);
    const [questionList, setquestionList] = useState( CreateQuestions );
    const [isAnswersVisible, setisAnswersVisible] = useState(false);

    useEffect(
        ()=>{
            if(!isAnswersVisible){
                setquestionList( CreateQuestions );
            };
            },
        [isAnswersVisible]
        );

    return(
        <div>
            {questionList}
            <button id="CheckAnswerButton" onClick={()=>setisAnswersVisible(prevState=>!prevState)}>
                {isAnswersVisible ? "Check Answers" : "Play Again"}
            </button>
        </div>
    )
}