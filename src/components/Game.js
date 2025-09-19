import React, { useEffect, useState } from "react";
import Boxes from "./Boxes";

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Game = ({ difficulty }) => {
  const tiles = difficulty === "easy" ? 8 : difficulty === "normal" ? 16 : 32;
  const [tries, setTries] = useState(0);
  const [pair, setPair] = useState([]);
  const [matchedArray, setMatchedArray] = useState([]);
  const [boxArray, setBoxArray] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const temp = [];
    for (let i = 1; i <= tiles; i++) {
      temp.push(i % (tiles / 2));
    }
    setBoxArray(shuffleArray(temp));
  }, [tiles]);

  useEffect(() => {
    if (matchedArray.length === tiles / 2) {
      setGameOver(true);
    }
  }, [matchedArray, tiles]);

const handleBoxClicked = (index, number) => {
  if (pair.length === 0) {
    setPair([{ index, value: number }]);
  } else if (pair.length === 1) {
    const newPair = [...pair, { index, value: number }];
    setPair(newPair);

    if (newPair[0].value === newPair[1].value) {
      setMatchedArray((prev) => [...prev, number]);
    }

    setTries((prev) => prev + 1);

    setTimeout(() => {
      setPair([]);
    }, 800);
  }
};


  return (
  <div className="game-container">
    <h1 className="game-title">GAmE YO</h1>
    <h4 className="tries">Tries: {tries}</h4>

    {gameOver ? (
      <h2 className="game-over">🎉 You matched all pairs! 🎉</h2>
    ) : (
      <Boxes
        boxArray={boxArray}
        handleBoxClicked={handleBoxClicked}
        matchedArray={matchedArray}
        pair={pair}
      />
    )}
  </div>
);

};

export default Game;
