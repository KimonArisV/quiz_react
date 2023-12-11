import {useState, useEffect} from "react";
import QuestionBolck from "./Question";
import {nanoid} from "nanoid";

export default function QuizPage() {

    //function for the creation of components fo answers:
    const createQuestions = () => <QuestionBolck key={nanoid()} />;
    const [questionList, setquestionList] = useState( Array(5).fill().map(createQuestions) );
    const [isAnswersVisible, setisAnswersVisible] = useState(false);

    useEffect(
        ()=>{
            if(!isAnswersVisible){
                setquestionList( Array(5).fill().map(() => <QuestionBolck key={nanoid()} />));
            };
            },
        [isAnswersVisible]
        );

    return(
        <div>
            {questionList}
            <button id="CheckAnswerButton" onClick={()=>setisAnswersVisible(prevState=>!prevState)}>{isAnswersVisible ? "Check Answers" : "Play Again"}</button>
        </div>
    )
}