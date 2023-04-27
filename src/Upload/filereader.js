import React, { useRef } from 'react';
import Papa from "papaparse";

function FileReader({setData}) {

    const fileUpload = useRef(0);
    var csvfile = null;
    var dataArray = null;

    const handleChange = event => {
        csvfile = event.target.files[0];
    };

    const importCSV = () => {
        //const { csvfile } = this.state;
        Papa.parse(csvfile, {
            complete: updateData,
            header: true
        });
    };

    const updateData = (result) => {
        var data = result.data;
        dataArray = data;
        setData(dataArray);
        //console.log(data);
    }
    
    return (
        <div className="App">
            <h2>Import CSV File!</h2>
            <input
                className="csv-input"
                type="file"
                ref={fileUpload}
                name="file"
                placeholder={null}
                onChange={handleChange}
            />
            <p />
            <button onClick={importCSV}> Upload now!</button>
        </div>
    );
    
  }
  
  export default FileReader;