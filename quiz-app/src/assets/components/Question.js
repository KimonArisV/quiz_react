
const he = require("he");

export default function QuestionBlock(props) {

    return(
        <div>
        <h2>{he.decode(props.data.question)}</h2>
        </div>
    )
}