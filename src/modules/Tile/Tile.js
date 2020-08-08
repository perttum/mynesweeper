import React, {useState} from 'react';
import './Tile.css';

const Tile = (props) => {
    
    const [mine, setMine] = useState(props.obj.mine);
    const [label, setLabel] = useState('')
    
    console.log('tile: ', props);
    

    // tileStates: 0 = cleared, 1 = closed, untouched
    const [tileState, setTileState] = useState(1);
    
    const handleTileClick = (event) => {
        console.log('click tile', event.target.value);
        if(!mine){
            setTileState(0);
        } else{
            console.log('Mine!');
        }

      }

    // STYLES
    const state0 = {
        backgroundColor: "white",
        border: "1px solid lightGray"
    }

    let style;
        
    switch(tileState){
        case 0:
            style = state0;
            break;
        default: break;
    }

    return(
        <button className="tile" style={style} onClick={handleTileClick} value={props.val}>
            T
        </button>
    )
}

export default Tile;