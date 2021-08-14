import React from "react";
import "../Component/Bar2.css";
const Bar2 = () => {
  return (
    <div className="bar2">
      <img src={process.env.PUBLIC_URL + "/Image/less.png"} alt="" />
      <h2>Add Device</h2>
      <p>Save</p>
    </div>
  );
};

export default Bar2;
