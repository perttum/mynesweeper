import React, {useState} from 'react';
import './App.css';
import Board from './modules/Board/Board';
import Button from './modules/Button/Button';
import StartMenu from './modules/StartMenu/StartMenu';
import boardGen from './gamelogic/boardgen';

function App() {

  const [boardWidth, setBoardWidth] = useState(8);
  const [boardHeight, setBoardHeight] = useState(8);
  const [board, setBoard] = useState(null);
  const [mines, setMines] = useState(null);
  const [mineAmount, setMineAmount] = useState(6);
  const [tileSize, setTileSize] = useState(50);

  // game state can be: 'menu' , 'game' or 'gameOver'
  const [gameState, setGameState] = useState('menu');




  

  // HANDLERS

  const handleNewGameButton = () => {
    //createBoard();
    const newBoard = boardGen.createBoard(boardWidth, boardHeight, mineAmount);
    console.log(newBoard);
    setBoard(newBoard);
    setGameState('game');
  }

  const handleTileClick = (event) => {
    
    // this value is something like "1,3" "13,0" etc.. x/y coords in a string
    const val = event.target.value;

    console.log('click tile', val);
    
    
    const x = Number(val.substring(0, val.indexOf(',')));
    const y = Number(val.substring(val.indexOf(',') + 1, val.length));
    
    const location = {
      x: x,
      y: y
    }
    
    //console.log(`x:${x} y:${y}`);
    
    openTile(x,y);

    // Check for mine
    if(board[x][y].mine){

      gameOver();

    } 
  }

  const openTile = (locX, locY) =>{
    const newBoard = [...board];
    
    newBoard[locX][locY].open = true;
    //console.log('newB: ', newBoard);
    
    

    if(board[locX][locY].neighborMines > 0){
      console.log(`I Have neighbors!`);
      
    }
    else{
      console.log(`I dont have neighbors!`);
      for (let x = -1; x <= 1; x++){
        for (let y = -1; y <= 1; y++){
          
          let xLoc = locX + x;
          let yLoc = locY + y;

          if(xLoc >= 0 && xLoc < boardWidth){
            if(yLoc >= 0 && yLoc < boardHeight){
                            
              if(!board[xLoc][yLoc].open){
                //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`);
                //board[xLoc][yLoc].open = true;
                openTile(xLoc, yLoc);
              } 
              else{
                //console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`);
                
              }
            }
          }
          //newBoard[x][y].open = true;
          //if(newBoard[x][y])
        } 
      }
    }

    setBoard(newBoard);
  }

  const gameOver = () => {
    console.log('Game Over!');
    const newBoard = [...board];
    for (let x = 0; x < newBoard.length; x++) {
      for (let y = 0; y < newBoard[x].length; y++) {
        newBoard[x][y].open = true;
      }
      
    }
    console.log(newBoard);
    setBoard(newBoard);
  }

  switch(gameState){
    case 'menu':
      return(
        <StartMenu onClick={handleNewGameButton}/>
      )
      break;
    case 'game':
      return (
        <div>
          <h1>Minesweeper</h1>
          
          <Board 
            board={board !== null ? board : null} 
            boardSize={tileSize * boardWidth}
            onClickTile={handleTileClick}
          />
        </div>
      )
      break;
  }

  
}

export default App;
