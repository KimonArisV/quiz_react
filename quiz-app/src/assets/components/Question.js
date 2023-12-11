//import Choices from "./assets/components/Choises";

//initialize the decoder
const he = require("he");
const _ = require('lodash');

export default function QuestionBlock(props) {
    const allPossibleAnswers = [props.data.correct_answer, ...props.data.incorrect_answers];
    const allPossibleAnswersDecoded = allPossibleAnswers.map(element=>he.decode(element));
    const shuffledArray = _.shuffle(allPossibleAnswersDecoded);


    //const ChoisesArray = < Choises mutliChoisesData={props.} />; 
    console.log(shuffledArray)
    return(
        <div>
            <p className="question"> {he.decode(props.data.question)} </p>
            <div id="multipleChoise">
                {/* {Choises1} */}
            </div>
        </div>
    )
}