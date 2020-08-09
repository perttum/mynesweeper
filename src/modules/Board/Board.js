import React from 'react';
import Tile from '../Tile/Tile';
import './Board.css';

const board = (props) => {
    console.log('board props: ', props);
    
    if(props.board !== null){

        const size = {
            width: props.boardSize,
            heigth: props.boardSize
        }

        return(
            <div className="board" style={size}>
                {props.board.map((col, y) => {
                    return col.map((row, x) => {                        
                        const tileName = `${x}${y}`;
                        return <Tile 
                                    key={tileName} 
                                    obj={props.board[x][y]} 
                                    onClick={props.onClickTile}
                                />
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