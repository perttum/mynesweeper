import React, {useState} from 'react';
import './index.css';
import Board from './modules/Board/Board';
import StartMenu from './modules/StartMenu/StartMenu';
import boardGen from './gamelogic/boardgen';
import Header from './modules/Header/Header';

function App() {

  
  const [boardWidth, setBoardWidth] = useState(3);
  const [boardHeight, setBoardHeight] = useState(8);
  const [board, setBoard] = useState(null);
  const [mines, setMines] = useState(null);
  const [mineAmount, setMineAmount] = useState(3);
  const [tileSize, setTileSize] = useState(50);

  // game state can be: 'menu' , 'game' or 'gameOver'
  const [gameState, setGameState] = useState('menu');

  // custom game form
  const [xSize, setXSize] = useState(4);
  const [ySize, setYSize] = useState(4);
  const [customMineAmount, setCustomMineAmount] = useState(2);

  // HANDLERS

  const handleNewGameButton = () => {
    startGame(boardWidth, boardHeight, mineAmount);
    // const newBoard = boardGen.createBoard(boardWidth, boardHeight, mineAmount);
    
    // setBoard(newBoard);
    // setGameState('game');
  }

  const handleTileClick = (event) => {
    
    // this value is something like "1,3" "13,0" etc.. x/y coords in a string
    const val = event.target.value;

    const x = Number(val.substring(0, val.indexOf(',')));
    const y = Number(val.substring(val.indexOf(',') + 1, val.length));
    
    openTile(x,y);

    // Check for mine
    if(board[x][y].mine){
      gameOver();
    } 
  }

  const handleCustomGameInputChange = (event) => {
    console.log(`size changed: ${event.target.value} in name ${event.target.name}`);
    switch(event.target.name){
      case 'x':
        setXSize(Number(event.target.value));
        break;

      case 'y':
        setYSize(Number(event.target.value));
        break;

      case 'mines':
        setCustomMineAmount(Number(event.target.value));
        break;

      default: break;
    }
  }

  const handleSendCustomGameForm = (event) => {

    setBoardWidth(xSize);
    setBoardHeight(ySize);
    setMineAmount(customMineAmount);  
    startGame();
    
  }

  const startGame = () => {
    const newBoard = boardGen.createBoard(boardWidth, boardHeight, mineAmount);
    setBoard(newBoard);
    setGameState('game');
  }

  const openTile = (locX, locY) =>{
    const newBoard = [...board];
    
    newBoard[locX][locY].open = true;

    if(board[locX][locY].neighborMines > 0){
      //console.log(`I Have neighbors!`);
      
    }
    else{
      //console.log(`I dont have neighbors!`);
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
        
        <div>
          <Header />
          <div className="container">
            
            <StartMenu 
              onClick={handleNewGameButton} 
              onClickCustomGame={handleSendCustomGameForm}
              onChange={handleCustomGameInputChange}
            />

          </div>  
        </div>
        
      )
      break;
    case 'game':
      return (

        <div>
          <Header />
          <div className="container">  
            <Board 
              board={board !== null ? board : null} 
              boardSize={tileSize * boardWidth}
              onClickTile={handleTileClick}
            />
          </div>
        </div>
      )
      break;
  }
}

export default App;
