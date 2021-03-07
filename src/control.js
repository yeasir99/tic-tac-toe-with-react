const calculateStatus = (winner, squares, nextValue) => {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? "Scratch: Cat's game"
    : `Next player: ${nextValue}`;
};

const calculateNextValue = (squares) => {
  const xSqueresCount = squares.filter((r) => r === "X").length;
  const oSqueresCount = squares.filter((r) => r === "O").length;
  return oSqueresCount === xSqueresCount ? "X" : "O";
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export { calculateStatus, calculateNextValue, calculateWinner };
