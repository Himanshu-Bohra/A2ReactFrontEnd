import React, { useState } from 'react';

function NumberInput({ onNumberSubmit }) 
{
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        // We only accept numeric data
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    };

    return (
        <div>
            <span style={{color:"white"}}>RANDOM BY COUNT: </span>
            <input
                type="text"
                placeholder="Enter a number"
                value={value}
                onChange={handleChange}
            />
            <button onClick={() => onNumberSubmit(Number(value))}>Submit</button>
        </div>
    );
}

export default NumberInput;