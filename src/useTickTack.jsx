import React from "react";
import { useState } from "react";

const inititalState = () => Array(9).fill(null);
const winningPatterns = [
  [0, 1, 2], //row1
  [3, 4, 5], //row2
  [6, 7, 8], //row3
  [0, 3, 6], //column1
  [1, 4, 7], //column2
  [2, 5, 8], //column3
  [0, 4, 8], //diagonal1
  [2, 4, 6], //diagonal2
];

function useTickTack() {
  const [board, setBoard] = useState(inititalState());
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = () => {
    const currentBoard = board;
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner();
    if (winner || board[index]) return;
    const newboard = [...board];
    newboard[index] = isXNext ? "X" : "O";
    setBoard(newboard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner();
    if (winner) {
      return `Player ${winner} wins!`;
    }
    if (!board.includes(null)) return "It's a Draw";
    return `Player ${isXNext ? "X" : "O"} turn`;
  };

  const resetGame = () => {
    setBoard(inititalState());
    setIsXNext(true);
  };

  return {
    isXNext,
    board,
    handleClick,
    calculateWinner,
    getStatusMessage,
    resetGame,
  };
}

export default useTickTack;
