import React, { useState } from "react";
import "./../styles/App.css";
import Game from "./Game";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState("");

  const startGame = () => {
    if (!difficulty) {
      alert("Please select a difficulty!");
      return;
    }
    setGameStarted(true);
  };

  return (
    <>
      {gameStarted ? (
        <Game difficulty={difficulty} />
      ) : (
        <div className="levels_container">
          <h3 className="title">Welcome!</h3>
          <div className="options">
            <label>
              <input
                id="easy"
                type="radio"
                name="difficulty"
                value="easy"
                onChange={(e) => setDifficulty(e.target.value)}
              />
              Easy
            </label>
            <label>
              <input
                id="normal"
                type="radio"
                name="difficulty"
                value="normal"
                onChange={(e) => setDifficulty(e.target.value)}
              />
              Normal
            </label>
            <label>
              <input
                id="hard"
                type="radio"
                name="difficulty"
                value="hard"
                onChange={(e) => setDifficulty(e.target.value)}
              />
              Hard
            </label>
          </div>
          <button className="start-btn" onClick={startGame}>
            Start
          </button>
        </div>
      )}
    </>
  );
};

export default App;
