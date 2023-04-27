import React, { useState } from "react";
import FileReader from "../Upload/filereader";

function ParseResults() {
    const test = () => {
        console.log(data);
    }

    const[data, setData] = useState();

    return (
        <div>
            <FileReader setData={setData}/>

            <button onClick={test}>test</button>
        </div>
    )
    
}

export default ParseResults;