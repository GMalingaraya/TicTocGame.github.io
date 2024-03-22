
let currentPlayer = 'X';
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (gameBoard[row][col] === '' && currentPlayer !== null) {
    gameBoard[row][col] = currentPlayer;
    updateBoard();
    const winner = checkWinner();
    if (winner) {
      alert(`${winner} wins!`);
      resetGame();
    } else if (isBoardFull()) {
      alert("It's a tie!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function updateBoard() {
  const cells = document.querySelectorAll('.cell');
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cells[index].textContent = gameBoard[i][j];
      index++;
    }
  }
}

function checkWinner() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== '') {
      return gameBoard[i][0];
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (gameBoard[0][j] === gameBoard[1][j] && gameBoard[1][j] === gameBoard[2][j] && gameBoard[0][j] !== '') {
      return gameBoard[0][j];
    }
  }

  // Check diagonals
  if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== '') {
    return gameBoard[0][0];
  }
  if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== '') {
    return gameBoard[0][2];
  }

  return null;
}

function isBoardFull() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  updateBoard();
}
