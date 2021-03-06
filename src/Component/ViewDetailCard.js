import React from "react";
import "../Component/ViewDetailCard.css";

const ViewDetailCard = () => {
  return (
    <div className="viewdetailcard">
      <div className="viewdetailcard__meter">
        <p>700</p>
        <p>KWM</p>
      </div>
      <div className="viewdetailcard__bedroom">
        <div className="viewdetailcard__bedroomLeft">
          <h3>Bedroom</h3>
          <div className="viewdetails__bedroomDetail">
            <img src={process.env.PUBLIC_URL + "/Image/Vector 22.png"} alt="" />
            <p>increase 20%</p>
          </div>
        </div>

        <img src={process.env.PUBLIC_URL + "/Image/Vector 8.png"} alt="" />
      </div>
    </div>
  );
};

export default ViewDetailCard;
