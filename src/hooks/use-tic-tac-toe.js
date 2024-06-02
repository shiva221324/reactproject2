import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const winningpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [1, 4, 7],
    [6, 7, 8],
    [3, 4, 5],
  ];
  const calculatedWinner = (currentBoard) => {
    for (let i = 0; i < winningpatterns.length; i++) {
      const [a, b, c] = winningpatterns[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    const winner = calculatedWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };
  const getStatusMessage = () => {
    const winner = calculatedWinner(board);
    if (winner) return `Player ${winner} wins!🥳`;

    if (!board.includes(null)) return `It's a draw!😑`;

    return `Player ${isXNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return { board, handleClick, calculatedWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
