//Connect Four
//Check horizontal win
const horiWin = (board, m, n, color) => {
  m = Number(m);
  n = Number(n);
  if (n <= 3 && board[m][n + 1] && board[m][n + 2] && board[m][n + 3]) {
    if (
      board[m][n + 1][2] === color &&
      board[m][n + 2][2] === color &&
      board[m][n + 3][2] === color
    ) {
      return true;
    }
  }
  return false;
};

//Check vertical win
const vertWin = (board, m, n) => {
  m = Number(m);
  n = Number(n);
  if (
    m <= 2 &&
    board[m + 1] &&
    board[m + 2] &&
    board[m + 3] &&
    board[m + 1][n] &&
    board[m + 2][n] &&
    board[m + 3][n]
  ) {
    let color = board[m][n][2];
    if (
      board[m + 1][n][2] === color &&
      board[m + 2][n][2] === color &&
      board[m + 3][n][2] === color
    ) {
      return true;
    }
  }
  return false;
};

//Check up-right diagonal win
const diagWin = (board, m, n) => {
  m = Number(m);
  n = Number(n);
  if (
    m <= 2 &&
    n <= 3 &&
    board[m + 1][n + 1] &&
    board[m + 2][n + 2] &&
    board[m + 3][n + 3]
  ) {
    let color = board[m][n][2];
    if (
      board[m + 1][n + 1][2] === color &&
      board[m + 2][n + 2][2] === color &&
      board[m + 3][n + 3][2] === color
    ) {
      return true;
    }
  }
  return false;
};

//Check up-left diagonal win
const diagLeftWin = (board, m, n) => {
  m = Number(m);
  n = Number(n);
  if (
    m <= 2 &&
    n >= 3 &&
    board[m + 1][n - 1] &&
    board[m + 2][n - 2] &&
    board[m + 3][n - 3]
  ) {
    let color = board[m][n][2];
    if (
      board[m + 1][n - 1][2] === color &&
      board[m + 2][n - 2][2] === color &&
      board[m + 3][n - 3][2] === color
    ) {
      return true;
    }
  }
  return false;
};

//Recursively play the game
const assignPieces = (
  pieces,
  red = [],
  yellow = [],
  m = 0,
  n = 0,
  board = [[], [], [], [], [], []]
) => {
  //Tie game after all moves completed
  if (n === pieces.length) {
    return "Draw";
  }

  //Dig one level deeper if same letter exists
  if (board[m].some((e) => e.includes(pieces[n].slice(0, 2)))) {
    m++;
    return assignPieces(pieces, red, yellow, m, n, board);
  }

  //Add element to board and player history
  board[m][pieces[n].charCodeAt(0) - 65] = pieces[n];
  pieces[n][2] === "R"
    ? red.push(`${m}${pieces[n].charCodeAt(0) - 65}`)
    : yellow.push(`${m}${pieces[n].charCodeAt(0) - 65}`);

  //Check victory
  if (pieces[n][2] === "R" && n >= 6) {
    red.forEach((e) => {
      if (
        horiWin(board, e[0], e[1], "R") ||
        vertWin(board, e[0], e[1], "R") ||
        diagWin(board, e[0], e[1], "R") ||
        diagLeftWin(board, e[0], e[1], "R")
      ) {
        red.push("win");
      }
    });
    if (red.includes("win")) return "Red";
  } else {
    yellow.forEach((e) => {
      if (
        horiWin(board, e[0], e[1], "Y") ||
        vertWin(board, e[0], e[1], "Y") ||
        diagWin(board, e[0], e[1], "Y") ||
        diagLeftWin(board, e[0], e[1], "Y")
      ) {
        yellow.push("win");
      }
    });
    if (yellow.includes("win")) return "Yellow";
  }

  //Iterate next move
  n++;
  return assignPieces(pieces, red, yellow, (m = 0), n, board);
};

//Return winner
const whoIsWinner = (pieces) => {
  return assignPieces(pieces);
};

//Pseudocode

// Declare an array with six empty array elements representing the number of rows.
// Loop through the position list, ensuring that only one of each letter from
// A-G is included in the subarray. We check by using letter + _.
