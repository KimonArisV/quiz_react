

function StarterPage(props) {
  
    return (
        <div id="first-page-container">
            <h1 id="intro-title">Lets start our Quiz</h1>
            <p id="instructions">There will be 5 questions and you need to choose the right answers and submit and check. 
            You can play as many times as you want. Click "Start Quiz" to start!!!</p>
            <button id="startGameButton" onClick={props.SetStartGame}>Start Quiz</button>
        </div>
    );
  }
  
  export default StarterPage;