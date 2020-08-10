import React from 'react';
import Button from '../General/Button/Button';
import './StartMenu.css';
import InputNumber from '../General/Inputs/InputNumber';

const startMenu = (props) => {
    return(
        <div>
            <h2>Start menu</h2>
            <div>
                <Button label={"easy"} onClick={props.onClick}/>
                <Button label={"medium"} />
                <Button label={"hard"} />
                
            </div>

            <div>
            <h4>Custom game</h4>
                <form>
                    <InputNumber label="X:" onChange={props.onChange} name="x"/>
                    <InputNumber label="Y:" onChange={props.onChange} name="y"/>
                    <InputNumber label="Mines:" onChange={props.onChange} name="mines"/>
                    <Button label="start" onClick={props.onClickCustomGame}/>
                </form>
            </div>

        </div>
    )
}

export default startMenu;