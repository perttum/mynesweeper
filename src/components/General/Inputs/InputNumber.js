import React from 'react';
import './InputNumber.css';

const inputNumber = (props) => {
    return(
        <div className="input-group">
            <label>{props.label}</label>
            <input type="number" onChange={props.onChange} name={props.name}/>
        </div>
    )
}

export default inputNumber;