import React from 'react';

const button = (props) => {
    return(
        <button onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default button;