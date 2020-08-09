import React from 'react';
import Button from '../Button/Button';
import './StartMenu.css';

const startMenu = (props) => {
    return(
        <div>
            <h2>Start menu</h2>
            <div>
                <Button label={"easy"} onClick={props.onClick}/>
                <Button label={"medium"} />
                <Button label={"hard"} />
                <Button label={"custom"} />
            </div>

            <div>
                <form>
                    <h4>Custom game</h4>
                    <label>board width</label>
                    <input type="number"/>
                    <label>board height</label>
                    <input type="number"/>
                </form>
            </div>

        </div>
    )
}

export default startMenu;