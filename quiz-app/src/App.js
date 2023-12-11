
import { useState } from "react";
import StarterPage from "./assets/components/StarterPage";

function App() {

  const [startGame,setstartGame] = useState(false);

  return (
    <div className="App">
      <div id="first-page-container">
        {!startGame ? <StarterPage SetStartGame={()=>setstartGame(true)} /> : "hello world"}
      </div>
    </div>
  );
}

export default App;
