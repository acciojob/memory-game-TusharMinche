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
    <div className="App">
      <h1>Memory Matching Game</h1>
      {gameStarted ? (
        <Game difficulty={difficulty} />
      ) : (
        <section className="levels_container">
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
          <button className="start-btn" onClick={startGame}>
            Start
          </button>
        </section>
      )}
    </div>
  );
};

export default App;
