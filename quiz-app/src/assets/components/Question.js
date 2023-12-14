import Choise from "./Choise";
import {nanoid} from "nanoid";
import {useState, useEffect} from "react";

//initialize the decoder
const he = require("he");
//initialize the shuffler
const _ = require('lodash');

export default function QuestionBlock(props) {
    //created a hook for the pressed choise state
    const [isHeldArray, setIsHeldArray] = useState([false,false,false,false]);
    //created a hook for the array of choises for this question
    const [shuffledArray, setShuffledArray] = useState([]);
    // created a func that will change the chosen answer and make sure 
    //only one answered is chosen every time
    const changeAnswer = id=> {
        const newIsHeldArray = [false,false,false,false];
        newIsHeldArray[id]=true;
        setIsHeldArray(newIsHeldArray);
    };
    //create a hook to make sure the re-shuffling happens only when answers change
    //therefore only when the game re-starts
    const choisesArray = props.answers.map((element,id)=> 
        < Choise 
            key={nanoid()} 
            oneMutliChoisesData={element} 
            isHeldCheck={isHeldArray[id]} 
            changeAnswer={()=>changeAnswer(id)}
            correctAnswer={props.correct_answer===element}
            isAnswersVisible={props.isAnswersVisible}
            setScore={props.setScore}
        />
    );
    
    return(
        <div >
            {/* render the question */}
            <p className="question"> {he.decode(props.question)} </p>
            {/* render the choises */}
            <div id="multipleChoise">
                {choisesArray}
            </div>
        </div>
    )
}