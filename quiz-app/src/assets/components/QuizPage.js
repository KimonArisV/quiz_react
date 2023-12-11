import QuestionBolck from "./Question";

export default function QuizPage() {

    const questionList = Array(5).fill().map(() => <QuestionBolck />);

    return(
        <div>
        {questionList}
        </div>
    )
}