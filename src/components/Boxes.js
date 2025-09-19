import React from "react";

const Boxes = ({ boxArray, handleBoxClicked, matchedArray, pair }) => {
  return (
    <div className="cells_container">
      {boxArray.map((boxNumber, i) => {
        const isMatched = matchedArray.includes(boxNumber);
        const isClicked = pair.some((p) => p.index === i);

        return (
          <div
            key={i}
            className="box"
            onClick={() => handleBoxClicked(i, boxNumber)}
          >
            <span>{isMatched || isClicked ? boxNumber : ""}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
