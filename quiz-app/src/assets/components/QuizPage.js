import {useState} from "react";
import QuestionBolck from "./Question";
import {nanoid} from "nanoid";

export default function QuizPage() {

    const [questionList, setquestionList] = useState( Array(5).fill().map(() => <QuestionBolck key={nanoid()} />) );
    const [isAnswersVisible, setisAnswersVisible] = useState(false);

    return(
        <div>
            {questionList}
            <button id="CheckAnswerButton" onClick={()=>setisAnswersVisible(prevState=>!prevState)}>{isAnswersVisible ? "Check Answers" : "Play Again"}</button>
        </div>
    )
}