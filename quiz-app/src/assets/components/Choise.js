import { useEffect, useState } from "react";

//initialize the decoder
const he = require("he");

export default function Choise(props){
    //create a style for the choises so that the color changes when they get selected
    const [colorButton,setColorButton] = useState(props.isHeldCheck ? "#808080" : "white");

    const buttonStyle = {
        backgroundColor: colorButton,
        color: "#000000", // Text color
        padding: "10px",
        border: "1px solid #000000",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      };

    //create a score checker: with useEffect to only run the score calculation at the end
    useEffect(
        ()=>{
            if(props.isAnswersVisible && props.correctAnswer && props.isHeldCheck){
                props.setScore();
            };
            if(props.isAnswersVisible){
                if (props.isHeldCheck && props.correctAnswer){
                    setColorButton("green");
                }else if (props.isHeldCheck){
                    setColorButton("red");
                }else if (props.correctAnswer){
                    setColorButton("green");
                };
            };
        },
        [props.isAnswersVisible]
    );
    return(
        // on click we call the function that will change which choise is selected in the parent component
        <button className="buttonChoices" onClick={props.changeAnswer} style={{...buttonStyle, backgroundColor: colorButton}}>
            {he.decode(props.oneMutliChoisesData)}
            </button>
    )
};
