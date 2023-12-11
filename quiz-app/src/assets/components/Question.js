import Choise from "./Choises";
import {nanoid} from "nanoid";

//initialize the decoder
const he = require("he");
const _ = require('lodash');

export default function QuestionBlock(props) {
    const allPossibleAnswers = [props.data.correct_answer, ...props.data.incorrect_answers];
    const allPossibleAnswersDecoded = allPossibleAnswers.map(element=>he.decode(element));
    const shuffledArray = _.shuffle(allPossibleAnswersDecoded);

    const choisesArray = shuffledArray.map(element=> < Choise key={nanoid()} oneMutliChoisesData={element} />);


    //const ChoisesArray = < Choises mutliChoisesData={props.} />; 
    console.log(shuffledArray)
    return(
        <div>
            <p className="question"> {he.decode(props.data.question)} </p>
            <div id="multipleChoise">
                {choisesArray}
            </div>
        </div>
    )
}