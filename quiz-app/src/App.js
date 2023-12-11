
import { useState } from "react";

function App() {

  const [startGame,setstartGame] = useState(false);

  return (
    <div className="App">
      <div id="first-page-container">
      {!startGame && <h1 id="intro-title">Lets start our Quiz</h1>}
      {!startGame && <p id="instructions">There will be 5 questions and you need to choose the right answers and submit and check. 
        You can play as many times as you want. Click "Start Quiz" to start!!!</p>}
      {!startGame && <button id="startGameButton" onClick={()=>setstartGame(true)}>Start Quiz</button>}
      </div>
    </div>
  );
}

export default App;
