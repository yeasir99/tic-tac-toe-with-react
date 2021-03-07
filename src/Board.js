import { useState } from "react";
import {
  calculateNextValue,
  calculateStatus,
  calculateWinner,
} from "./control";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  console.log(squares);
  const nextValue = calculateNextValue(squares);
  const winner = calculateWinner(squares);
  const status = calculateStatus(winner, squares, nextValue);

  const selectSquare = (square) => {
    if (winner || squares[square]) {
      return;
    }
    const squaresCopy = [...squares];
    squaresCopy[square] = nextValue;
    setSquares(squaresCopy);
  };

  const renderSquare = (i) => (
    <button className="square" onClick={() => selectSquare(i)}>
      {squares[i]}
    </button>
  );

  const handleRestart = () => setSquares(Array(9).fill(null));
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button className="restart" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Board;
