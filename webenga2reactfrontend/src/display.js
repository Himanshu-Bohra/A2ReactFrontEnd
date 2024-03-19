import React from 'react';
import table_cell_bg_lighter from './table_cell_bg_lighter.png';

// response = the incoming response (fetch auto-gets it as a JSON obj!)
function DisplayResponse({responses})
{
    return (

        <div >
            {responses.map((response, index) => (
            
            
        <div key = {index} style={{display:'inline-table', justifySelf:'center', alignSelf:'center'}}>

                {
                    // TABLE TEST:
                }

                <table style={{border:'3px solid white'}}>

                <thead style={{
                    display:'flex',
                    justifyContent:'center', 
                    alignContent:'center',
                    fontWeight:'bold',
                    color:"white"
                    }}>
                    {response.date}
                </thead>

                <tbody style={{display:'flex',justifyContent:'center', alignContent:'center'}}>
                    <tr>
                        <td
                        style = {{
                            width:'400px', 
                            height:'400px', 
                            border:'1px solid purple',
                            fontFamily: 'Brush Script MT', 
                            fontSize: '19px', 
                            backgroundImage: 'url("./table_cell_bg_lighter.png")',
                            backgroundSize: 'cover'
                            }}>
                            {
                                // First goes explanation.
                                //console.log('Image path:', table_cell_bg_lighter)
                            }
                            {JSON.stringify(response.explanation)}
                        </td>
                        <td>
                            <img 
                            style={{width:'400px', height:'400px', border:'4px solid rgba(255,100,0,.4)'}}
                            src={response.hdurl}
                            ></img>
                        </td>
                    </tr>
                </tbody>
                </table>

                

            
        

                </div>
                ))}
        </div>
    );
}

export default DisplayResponse;