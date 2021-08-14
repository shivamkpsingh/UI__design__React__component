import React from "react";
import "../Component/AddDevice.css";
import Bar2 from "./Bar2";

const AddDevice = () => {
  return (
    <div className="addDevice">
      <Bar2 />
      <div className="addDevice__content">
        <div className="addDevice__box"></div>
        <button className="code__button">Enter Device Code</button>
        <button className="add__button">Add</button>
      </div>
    </div>
  );
};

export default AddDevice;
