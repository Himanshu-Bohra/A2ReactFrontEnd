import React, {useState} from 'react';

// Seems this is the way to make custom arguments, instead of props. Props = master argument?
function DateInput( {onDateSubmit})
{
    // Set the default state for these as 'null', so we can check against it as string.
    const [date, setDate] = useState('null');

    const handleSubmit = (event) => {
        event.preventDefault();
        onDateSubmit(date);
    };

    return (
        <form onSubmit={handleSubmit} style={{border:"1px solid white", alignContent:"center"}}>
            <span style={{color:"white"}}>SINGULAR DATE: </span>
            <input
            type='date'
            value={date}
            onChange={ (e) => setDate(e.target.value)}
            >

            </input>

            <button type='submit'>Submit</button>
        </form>
    );

}

export default DateInput;