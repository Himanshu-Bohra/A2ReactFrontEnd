import React, { useState } from "react";
import DateInput from "./dateinput";
import DisplayResponse from "./display";
import StartDateEndDateInput from "./twoDateInput";
import NumberInput from "./countInputBox";
//import axios from 'axios';

function MainForm()
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
            setServerResponse([json]);
        }
        catch(error)
        {
            console.error('Error fetching response from SpringBoot Server: ', error);
        }
    };


    const fetchServerDataTwo = async (dateStart, dateEnd) => {
        try
        {
            // Only for comparing dates
            const startDate = new Date(dateStart);
            const endDate = new Date(dateEnd);
            if( endDate > startDate)
            {
                // Format the date
                dateStart = dateStart.replaceAll('/','-');
                dateEnd = dateEnd.replaceAll('/','-');
                console.log("The formatted date is: " + dateStart + " and " + dateEnd);

                const response = await fetch('http://localhost:8080/apod/getByDate?start_date=' + dateStart
                + "&end_date=" + dateEnd);
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


    const fetchServerDataThree = async (count) => {
        try
        {
            if(count > 0)
            {
                //date = date.replaceAll('/','-');
                console.log("The count is: " + count );
                const response = await fetch('http://localhost:8080/apod/getByCount/' + count);

                // Check if the response is successful
                console.log(`Response OK: ${response.ok}, Status: ${response.status}`);
            
                // Log the response headers
                console.log(`Response Headers: ${response.headers.get('content-type')}`);
                console.log(response.json);

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

            <div>
            <StartDateEndDateInput onDateSubmit={fetchServerDataTwo} ></StartDateEndDateInput>
            <DateInput onDateSubmit={fetchServerData} ></DateInput>
            <NumberInput onNumberSubmit={fetchServerDataThree}></NumberInput>
        
            </div>

            
            {
                // Short-circuit evaluation
            serverResponse && <DisplayResponse responses = {serverResponse} ></DisplayResponse>
            }


        </div>

    );
}




export {
    MainForm
}