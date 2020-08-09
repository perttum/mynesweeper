import React from 'react';
import './Tile.css';

const Tile = (props) => {

    const obj = props.obj;
    //console.log('tile obj: ', obj);
    //const [mine, setMine] = useState(props.obj.mine);
    //const [label, setLabel] = useState('')
    
   // console.log('tile: ', props);
    

    // tileStates: 0 = cleared, 1 = closed, untouched
    //const [tileState, setTileState] = useState(1);
    
    // const handleTileClick = (event) => {
    //     console.log('click tile', event.target.value);
    //     // if(!mine){
            
    //     // } else{
    //     //     console.log('Mine!');
    //     // }

    //   }

    // STYLES
        // const state0 = {
        //     backgroundColor: "white",
        //     border: "1px solid lightGray"
        // }

    let style;
       
    if(obj.open){
        style = {
            backgroundColor: "white",
            borderTop: "1px dotted lightGray",
            borderLeft: "1px dotted lightGray",
            borderRight: "none",
            borderBottom: "none"
            
        }
    }
    // switch(obj.open){
    //     case 0:
    //         style = state0;
    //         break;
    //     default: break;
    // }

    const tileId = `${obj.locationX},${obj.locationY}`;
    let label;
    if(obj.open){

        label = obj.mine ? "M" : obj.neighborMines > 0 ? obj.neighborMines : '';
    } else{
        label = '';
    }

    return(
        <button className="tile" style={style} onClick={props.onClick} value={tileId}>
            {/* {obj.locationX},{obj.locationY} */}
            {label}
            
        </button>
    )
}

export default Tile;