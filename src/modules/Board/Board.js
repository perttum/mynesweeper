import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

const board = (props) => {
    
    if(props.board !== null){

        const size = {
            width: props.boardSize,
            heigth: props.boardSize
        }

        return(
            <div className="board" style={size}>
                {props.board.map((row, x) => {
                    return row.map((col, y) => {
                        //console.log('row: ', rowI + " " + colI);
                       // console.log('tileObj: ', props.board[x][y]);
                        
                        const tileName = `${props.board[x][y].id[0]}${props.board[x][y].id[1]}`;
                        return <Tile key={tileName} val={tileName} obj={props.board[x][y]}/>
                    })
                })}    
            </div>
        )
    }
    else{
        return(
            <p>
                Board has not been created yet.
            </p>
        )
    }
    
}

export default board;