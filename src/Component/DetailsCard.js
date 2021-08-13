import React from "react";
import "./DetailsCard.css";
const DetailsCard = () => {
  return (
    <div className="details__card">
      <div className="details__cardHeader">
        <div className="details__CardHeaderLeft">
          <img src={process.env.PUBLIC_URL + "/Image/Ellipse 27.png"} alt="" />
          <h3>AUG-2020</h3>
        </div>
        <div className="details__cardHeaderRight">
          <button>Choose Date</button>
        </div>
      </div>
      <div className="details__cardMeter">
        <div className="meter">
          <div className="details__cardMeterNumber">
            <h1>337</h1>
            <p>KWH</p>
          </div>
          <div className="details__cardMeterPara">
            <img src={process.env.PUBLIC_URL + "/Image/Vector 21.png"} alt="" />
            <p>Decrease 27%</p>
          </div>
        </div>
        <hr />
        <div className="meter">
          <div className="details__cardMeterNumber">
            <h1>163</h1>
            <p>USD</p>
          </div>
          <div className="details__cardMeterPara">
            <img src={process.env.PUBLIC_URL + "/Image/Vector 21.png"} alt="" />
            <p>Decrease 19%</p>
          </div>
        </div>
      </div>
      <div className="details__cardFooter">
          <p>View Details</p>
      </div>
    </div>
  );
};

export default DetailsCard;
