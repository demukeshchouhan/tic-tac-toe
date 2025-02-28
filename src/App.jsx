import "./App.css";
import useTickTack from "./useTickTack";

function App() {
  const { board, handleClick, calculateWinner, getStatusMessage, resetGame } =
    useTickTack();
  const winner = calculateWinner();
  return (
    <div className="wrapper">
      <h1 className="title">Tic-Tac-Toe App</h1>
      <div className="game">
        <div className="status">
          <h2 className={winner ? "winner" : ""}>{getStatusMessage()}</h2>
          <button onClick={resetGame}>Reset Game</button>
        </div>
        <div className="board">
          {board.map((val, index) => {
            return (
              <button
                className={`cell ${val !== null ? "disabled" : ""}`}
                key={index}
                onClick={() => handleClick(index)}
                disabled={val !== null}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
