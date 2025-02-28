import React from "react";
import { useTickTack } from "./useTickTack";

function TickTock({ size }) {
  const { board, getStatus, resetGame, handleClick } = useTickTack({ size });
  return (
    <div className="wrapper">
      <div
        className="game"
        style={{
          maxWidth: `calc(${size} * 200px)`,
        }}
      >
        <h1 className="title">Tic tac toe game</h1>
        <div className="status">
          <h3>{getStatus()}</h3>
          <button onClick={resetGame}>Reset Button</button>
        </div>
        <div
          className="board"
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
          }}
        >
          {board?.map((value, index) => {
            return (
              <button
                key={index}
                className="cell"
                onClick={() => handleClick(index)}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TickTock;
