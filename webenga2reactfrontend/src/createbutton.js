import React from 'react';

function CreateButton(props)
{
    function updateComponent()
    {
        alert('You just updated a component: '+props);
    }

    return(
        <button onClick={updateComponent}>
            {props.buttonName}
        </button>
    )
}

export default CreateButton;