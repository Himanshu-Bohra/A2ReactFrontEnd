import React, { useState } from "react";
import DateInput from "./dateinput";
import DisplayResponse from "./display";
import StartDateEndDateInput from "./twoDateInput";
import NumberInput from "./countInputBox";
//import axios from 'axios';

function DateOnly()
{
    // Apparently, this is how you can set a variable using a on-the-fly function?
    // Apparently, it does work! Weird...
    const [serverResponse, setServerResponse] = useState(null);

    const fetchServerData = async (date) => {
        try
        {
            date = date.replaceAll('/','-');
            console.log("The formatted date is: " + date);
            const response = await fetch('http://localhost:8080/apod/getByDate/' + date);
            console.log(response.body);
            const json = await response.json();
            setServerResponse(json);
        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    };

    return (
        <div>
            <DateInput onDateSubmit={fetchServerData} ></DateInput>
            {
                // Short-circuit evaluation
            serverResponse && <DisplayResponse responses = {[serverResponse]} ></DisplayResponse>
            }
        </div>
    );
}




// Function for select to and from date:
function StartEndDate()
{
    // Apparently, this is how you can set a variable using a on-the-fly function?
    // Apparently, it does work! Weird...
    const [serverResponse, setServerResponse] = useState(null);

    const fetchServerData = async (dateStart, dateEnd) => {
        try
        {
            console.log("dateStart and dateEnd: " + dateStart + " and " + dateEnd);
            if(dateStart==null || dateEnd==null)
            {
                // Do nothing
                return
            }
            else
            {
                // Format the date
                dateStart = dateStart.replaceAll('/','-');
                dateEnd = dateEnd.replaceAll('/','-');
                console.log("The formatted date is: " + dateStart + " and " + dateEnd);
                console.log("dateStart and dateEnd: " + dateStart + " and " + dateEnd);

                const response = await fetch('http://localhost:8080/apod/getByDate?start_date=' + dateStart
                + "&end_date=" + dateEnd);
                console.log(response.body);
                const json = await response.json();
                setServerResponse(json);
            }
        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    };

    return (
        <div>
            <StartDateEndDateInput onDateSubmit={fetchServerData} ></StartDateEndDateInput>
            {
                // Short-circuit evaluation
            serverResponse && <DisplayResponse responses = {serverResponse} ></DisplayResponse>
            }
        
        </div>
    );
}



// Count input

function FromCount()
{
    const [serverResponse, setServerResponse] = useState(null);

    const fetchServerData = async (count) => 
    {
        try
        {
            if( count > 0)
            {
                
                console.log("The count is: " + count);
                const response = await fetch('http://localhost:8080/apod/getByCount/' + count);
                console.log(response.body);
                const json = await response.json();
                setServerResponse(json);
            }
            else
            {
                return
            }
            
        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    };

    return (
        <div>
            <NumberInput onDateSubmit={fetchServerData} ></NumberInput>
            {
                // Short-circuit evaluation
            serverResponse && <DisplayResponse responses = {[serverResponse]} ></DisplayResponse>
            }
        </div>
    );
}




export {
    DateOnly,
    StartEndDate,
    FromCount
}