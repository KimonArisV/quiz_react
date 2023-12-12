import Choise from "./Choise";
import {nanoid} from "nanoid";
import {useState, useEffect} from "react";

//initialize the decoder
const he = require("he");
const _ = require('lodash');

export default function QuestionBlock(props) {
    const [isHeldArray, setIsHeldArray] = useState([false,false,false,false]);
    const [shuffledArray, setShuffledArray] = useState([]);
    const changeAnswer = id=> {
        const newIsHeldArray = [false,false,false,false];
        newIsHeldArray[id]=true;
        console.log(newIsHeldArray);
        setIsHeldArray(newIsHeldArray);
        // return (newIsHeldArray)
    };

    useEffect(()=>{
        const allPossibleAnswers = [props.data.correct_answer, ...props.data.incorrect_answers];
        const allPossibleAnswersDecoded = allPossibleAnswers.map(element=>he.decode(element));
        setShuffledArray( _.shuffle(allPossibleAnswersDecoded));
    }
    ,[props.data.correct_answer,props.data.incorrect_answers])
    
    const choisesArray = shuffledArray.map((element,id)=> 
        < Choise 
            key={nanoid()} 
            oneMutliChoisesData={element} 
            isHeldCheck={isHeldArray[id]} 
            changeAnswer={()=>changeAnswer(id)}
        />
    );


    //const ChoisesArray = < Choises mutliChoisesData={props.} />; 
    //console.log(shuffledArray)
    return(
        <div>
            <p className="question"> {he.decode(props.data.question)} </p>
            <div id="multipleChoise">
                {choisesArray}
            </div>
        </div>
    )
}