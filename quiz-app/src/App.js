
import { useState } from "react";
import StarterPage from "./assets/components/StarterPage";
import QuizPage from "./assets/components/QuizPage";

function App() {

  const [startGame,setstartGame] = useState(false);

  return (
    <div className="App">
      <div id="first-page-container">
        {!startGame ? <StarterPage SetStartGame={()=>setstartGame(true)} /> : <QuizPage  />}
        {/* the below was not needed inside the QuizPage component */}
         {/* startGame={startGame} />} */}
      </div>
    </div>
  );
}

export default App;
