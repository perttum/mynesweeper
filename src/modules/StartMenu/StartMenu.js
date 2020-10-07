import React from 'react';
import Button from '../General/Button/Button';
import './StartMenu.css';

const startMenu = (props) => {
    return(
        <div>
            <h2>Start menu</h2>
            <div>
                <Button label={`easy - Xmines`} onClick={props.setDifficulty} name="easy"/>
                <Button label={"medium"}  onClick={props.setDifficulty} name="medium"/>
                <Button label={"hard"}  onClick={props.setDifficulty} name="hard"/>
                <Button label={"Start game"} onClick={props.startGame} name="start-game"/>
            </div>

            {/* <div>
            <h4>Custom game</h4>
                <form>
                    <InputNumber label="X:" onChange={props.onChange} name="x"/>
                    <InputNumber label="Y:" onChange={props.onChange} name="y"/>
                    <InputNumber label="Mines:" onChange={props.onChange} name="mines"/>
                    <Button label="start" onClick={props.onClickCustomGame}/>
                </form>
            </div> */}

        </div>
    )
}

export default startMenu;