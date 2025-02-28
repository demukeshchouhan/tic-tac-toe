import { useState } from "react";

const initialBoard = (size) => Array(size * size).fill(null);

export const useTickTack = ({ size }) => {
  const [board, setBoard] = useState(initialBoard(size));
  const [isXTurn, setIsXTurn] = useState(false);

  const getStatus = () => {
    const winner = calculateMoves();
    if (winner) {
      return `Player ${winner} is winner`;
    }
    if (!board.includes(null)) return "It is a Draw!";
    return `Player X turn`;
  };

  const calculateMoves = () => {
    const patterns = [];
    // rows
    for (let row = 0; row < size; row++) {
      patterns.push(
        [...Array(size)].map((_, index) => {
          return row * size + index;
        })
      );
    }
    // columns
    for (let col = 0; col < size; col++) {
      patterns.push(
        [...Array(size)].map((_, index) => {
          return index * size + col;
        })
      );
    }

    // diagonals \
    patterns.push(
      [...Array(size)].map((_, index) => {
        return index * (size + 1);
      })
    );

    // anti-diagonals /
    patterns.push(
      [...Array(size)].map((_, index) => {
        return (index + 1) * (size - 1);
      })
    );

    for (let i = 0; i < patterns.length; i++) {
      const pattern = patterns[i];
      const first = pattern[0];
      if (
        board[first] &&
        pattern.every((index) => board[index] === board[first])
      ) {
        return board[first];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    const winner = calculateMoves();
    console.log({ board });
    console.log(winner);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(initialBoard(size));
    setIsXTurn(false);
  };
  return { board, getStatus, resetGame, handleClick };
};
