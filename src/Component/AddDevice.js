import React, { useState } from "react";
import "../Component/AddDevice.css";
import Bar2 from "./Bar2";
import QrReader from "react-qr-reader";
const AddDevice = () => {
  const [result,setResult]=useState()
  const handleError=(error)=>{
       alert(error.message)
  }
  const handleScan=(data)=>{
      if(data){
        setResult(data)
      }
  }
  return (
    <div className="addDevice">
      <Bar2 />
      <div className="addDevice__content">
        <div className="addDevice__box">
          <QrReader
           delay={300} 
           onError={handleError} 
           onScan={handleScan}

           />
           <h3>{result}</h3>
        </div>

        <button className="code__button">Enter Device Code</button>
        <button className="add__button">Add</button>
      </div>
    </div>
  );
};

export default AddDevice;
