const createBoard = (boardWidth, boardHeight, mineAmount) => {
    const newBoard = [];
    for (let x = 0; x < boardWidth; x++)  {
      newBoard.push([]);
      for (let y = 0; y < boardHeight; y++) {
        
        const newTile = {
          open: false, // 0 = open, 1 = hidden
          locationX: x, // tile X Location on board
          locationY: y, // same for Y
          mine: false, // is this a mine?
          neighborMines: 0 // value to show in open tile (if the tile has mines on neighbour tiles)
        }
        newBoard[x][y] = newTile;
      }
    }
    
    let boardTmp = createMines(newBoard, mineAmount, boardWidth, boardHeight);
    //console.log('bTmp ', boardTmp);
    
    //boardTmp = createMineCounts(boardTmp[0], boardTmp[1], boardWidth, boardHeight);

    //setBoard(boardTmp);
    return boardTmp;
  }

  const createMines = (board, mineAmount, boardWidth, boardHeight) => {
    
    let createdMines = 0;

    // Store mine locations in here. The locations are used later for adding mine neighbor counts.
    let mineLocations = [];

    while(createdMines < mineAmount){
      let randomX = Math.floor(Math.random() * boardWidth);
      let randomY = Math.floor(Math.random() * boardHeight);
      let randomLocation = {
        x: randomX,
        y: randomY
      }

      //let randomPos = [Math.floor(Math.random() * boardWidth), Math.floor(Math.random() * boardHeight)]
      
      if(createdMines === 0){
        
        board[randomX][randomY].mine = true;
        mineLocations.push(randomLocation);
        createdMines++;
      
      } else{
        if(board[randomX][randomY].mine){
         
          //console.log('There is already a mine at ', randomX +","+randomY);
        
        } else{
          mineLocations.push(randomLocation);
          board[randomX][randomY].mine = true;
          createdMines++;
        }
      }      
    }
    
    board = createMineCounts(board, mineLocations, boardWidth, boardHeight);
    return board;  
  }

  const createMineCounts = (board, mineLocations, boardWidth, boardHeight) => {
    //console.log(board);
    
    mineLocations.forEach(location => {
      //console.log('mineLoc: ', location);
      
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          
          if(x === 0 && y === 0){
            //console.log(`zero loc X:${x} Y:${y}`);
          } else{
            let xLoc = location.x +x;
            let yLoc = location.y +y;
            //console.log(`trying location... x:${xLoc} y:${yLoc}`);

            // Check if this location is on the board
            if(xLoc >= 0 && xLoc < boardWidth){
              if(yLoc >= 0 && yLoc < boardHeight){

                              
                if(!board[xLoc][yLoc].mine){
                  //console.log(`add mine count to x:${xLoc}/y:${yLoc} from y:${location.x}/y:${location.y}`);
                  board[xLoc][yLoc].neighborMines += 1;
                } 
                else{
                  //console.log(`..tried loc ${xLoc},${yLoc} but there was a mine.`);
                  
                }
              }
            } else{
              //console.log(`..tried loc ${xLoc},${yLoc} but it was not on board.`);
              
            }
          }
        }      
      }
         
    });
    return board;
  }

  module.exports = {createBoard};