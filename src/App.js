import React, {useState} from 'react';
import './App.css';
import Board from './modules/Board/Board';
import Button from './modules/Button/Button';

function App() {

  const [boardWidth, setBoardWidth] = useState(3);
  const [boardHeight, setBoardHeight] = useState(3);
  const [board, setBoard] = useState(null);
  const [mines, setMines] = useState(null);
  const [mineAmount, setMineAmount] = useState(7);
  const [tileSize, setTileSize] = useState(40);

  const createBoard = () => {
    const newBoard = [];
    for (let x = 0; x < boardWidth; x++)  {
      newBoard.push([]);
      for (let y = 0; y < boardHeight; y++) {
        const newTile = {
          tileState: 1,
          id: [x,y],
          mine: false
        }
        newBoard[x][y] = newTile;
      }
    }
    //console.log('board: ', newBoard);
    const boardWithMines = createMines(newBoard);
    setBoard(boardWithMines);
  }

  const createMines = (board) => {
    
    let createdMines = 0;
    
    while(createdMines < mineAmount){
      let randomPos = [Math.floor(Math.random() * boardWidth), Math.floor(Math.random() * boardHeight)]
      
      if(createdMines === 0){
        board[randomPos[0]][randomPos[1]].mine = true;
        createdMines++;
      } else{
        if(board[randomPos[0]][randomPos[1]].mine){
          console.log('There is already a mine at ', randomPos);
          
        } else{
          board[randomPos[0]][randomPos[1]].mine = true;
          createdMines++;
        }
      }      
    }
    return board;
  }

  // HANDLERS

  const handleNewGameButton = (event) => {
    createBoard();
  }

  const handleTileClick = (event) => {
    console.log('click tile', event.target.value);
    
  }

  return (
    <div>
      <h1>Minesweeper</h1>
      <Button label="New game" onClick={handleNewGameButton}/>
      <Board 
        board={board !== null ? board : null} 
        boardSize={tileSize * boardWidth}
        //onClickTile={handleTileClick}
      />
    </div>
  );
}

export default App;
