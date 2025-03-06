function gameBoard() {
  const board = [];
  const numRows = 3;
  const numColumns = 3;

  // OK
  const createEmptyBoard = () => {
    for (let i = 0; i < numRows; i++) {
      let columns = [];
      for (let j = 0; j < numColumns; j++) {
        columns[j] = " ";
      }
      board[i] = columns;
    }
    // console.table(board);
    // console.log();
  };

  // OK
  const printBoard = () => {    
    for (let i = 0; i < numRows; i++) {
      let element = "";
      for (let j = 0; j < numColumns; j++) {
        if (j < numColumns-1){
          element += board[i][j] + " | ";
        } else {
          element += board[i][j];
        }
      }
      console.log(element);
      if (i < numRows - 1) {
        console.log("----------");
      }
    }
    console.log();
  };


  // OK
  const checkEmptySpace = () => {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        if (board[i][j] === " ") {
          return true;
        } else {
          continue;
        }
      } 
    }
    return false;
  };


  // OK
  const putToken = (positionX, positionY, token) => {
    // Array starts at 0
    let posX = positionX - 1;
    let posY = positionY - 1;

    if (board[posX][posY] === " ") {
      board[posX][posY] = token;
    } else {
      console.warn("Not empty");
    }
    printBoard();
  };

  return { createEmptyBoard, printBoard, checkEmptySpace, putToken };
}



function gameController() {
  const gBoard = gameBoard();

  const endGame = false;

  const players = [
   {
    name: "Player One",
    token: "X",
   },
   {
    name: "Player Two",
    token: "O",
   }
  ];

  let playerActive = players[0];


  // OK
  const changeTurn = () => playerActive === players[0] ? players[1] : players[0];


  const playRound = () => {
    gBoard.createEmptyBoard();

    for (let index = 0; index < 2; index++) {
      console.log(`Player turn: ${playerActive.name}`);
      // let positionBoardX = prompt("What position X?");
      // let positionBoardY = prompt("What position y?");

      // let posX = Number(positionBoardX);
      // let posY = Number(positionBoardY);

      gBoard.putToken(2, 2, playerActive.token);

      playerActive = changeTurn();
    }
  };

  return { playRound, };
}

// TEST
let myBoard = gameBoard();
myBoard.createEmptyBoard();
myBoard.printBoard();
myBoard.putToken(1, 1, "X");
myBoard.putToken(1, 2, "O");
myBoard.putToken(1, 3, "X");

myBoard.putToken(2, 1, "X");
myBoard.putToken(1, 2, "O");
myBoard.putToken(2, 3, "X");

myBoard.putToken(3, 1, "X");
myBoard.putToken(3, 2, "O");
myBoard.putToken(3, 3, "X");


let myGame = gameController();
myGame.playRound();



// start
// first player --> player 1 
//   play, put token
//   isWinner?
// switch player
// second player
//   play, put token
//   isWinner?
// switch player

// finish game
//   one player wins
//   no more Space, no winner
