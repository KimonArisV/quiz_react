
export default function Choise(props){

    const buttonStyle = {
        backgroundColor: props.isHeldCheck ? "#808080" : "green", // Change to gray if isHeld is true
        color: "#000000", // Text color
        padding: "10px",
        border: "1px solid #000000",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      };

      console.log(props.correctAnswer);
    return(
        <button className="buttonChoices" onClick={props.changeAnswer} style={buttonStyle}>
            {props.oneMutliChoisesData}
            </button>
    )
};

//give  apropert of isheld to each question
// if help change its color 
//whe submission clciked change the write ansers to green
//change the answers that are selected and not the right ones to red
//count how many corrct you have and output it
//have it so you can only click one choice of the multiple choices
