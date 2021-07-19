import React, { useState } from 'react';
import BoxPlace from './BoxPlace';
// import BoxStyle from './BoxStyle';

const ColorForm = (props) => {
    const [colorful, setColorful] = useState({color: ""});
    const [boxState, setBoxState] = useState({boxes: []});

    const colorHandler = e => {
        setColorful({
            ...colorful,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();

        const box = [colorful.color];

        let boxesCopy = boxState.boxes.slice();
        boxesCopy.push(box);

        setBoxState({
            boxes: boxesCopy
        });
        setColorful({
            color:""
        });

    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <label htmlFor="color">Color: </label>
                <input type="text" name="color" value={colorful.color} onChange={ colorHandler }/>
                <input type="submit" value="Add"/>
            </form>

            <BoxPlace box={boxState}/>
        </div>
    );
}

export default ColorForm;
