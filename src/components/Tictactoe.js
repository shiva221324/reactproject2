import React, { useState } from "react";
import useTicTacToe from "../hooks/use-tic-tac-toe";

const Tictactoe = () => {
  const { board, calculateWinner, resetGame, getStatusMessage, handleClick } =
    useTicTacToe();
  return (
    <>
      <h1 className=" text-center font-mono font-semibold text-4xl bg-gray-50 ">
        Tic Tac Toe
      </h1>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="status mb-4">
          <span className="text-lg font-semibold">{getStatusMessage()}</span>
          <button
            onClick={resetGame}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Reset Game
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1 w-64">
          {board.map((value, index) => (
            <button
              key={index}
              className="w-20 h-20 text-2xl font-bold border border-gray-400 flex items-center justify-center bg-white hover:bg-gray-200"
              onClick={() => handleClick(index)}
              disabled={value !== null}
            >
              {board[index]}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tictactoe;
