import React, { useState } from 'react'

const form = (props) => {
    const { submitColor } = props;
    const [ color, setColor ] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        submitColor(true);
        // setColor("");
    }

    const handleColor = e => {
        setColor(e.target.value);
    }

    return (
        <div>
            <form onSubmit = { submitHandler }>
                <label htmlFor="color">Color: </label>
                <input type="text" onChange={ handleColor }/>
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default form



