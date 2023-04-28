import React, { useState } from "react";
import FileReader from "../Upload/filereader";

function ParseResults() {

    const[data, setData] = useState();

    const findPlayers = () => {
        let playerNames = [];
        //tranverse through all entry nodes and look for all that contain "admin approved"
        //take all usernames from the lines and add them to the firebase db
        for(let i = 0; i < data.length; i++)
        {
            if(data[i].entry.includes("joined the game"))
            {
                var subString = data[i].entry.substring(
                    data[i].entry.indexOf("\"") + 1,
                    data[i].entry.lastIndexOf("@") - 1
                )
                playerNames.push(subString);
            }
        }

        //firebase stuff
        

        //test
        for(let i = 0; i < playerNames.length; i++)
        {
            console.log(playerNames[i]);
        }
        
    }

    return (
        <div>
            <FileReader setData={setData}/>

            <button onClick={findPlayers}>test</button>
        </div>
    )
    
}

export default ParseResults;