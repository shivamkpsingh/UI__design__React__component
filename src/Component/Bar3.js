import React from "react";
import "../Component/Bar3.css";
const Bar3 = () => {
  return (
    <div className="bar3">
      <img src={process.env.PUBLIC_URL + "/Image/less.png"} alt="" />
      <h2>Kitchen</h2>
      <p>+</p>
    </div>
  );
};

export default Bar3;
