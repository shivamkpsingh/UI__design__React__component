import React from "react";
import { Link } from "react-router-dom";
import "../Component/ConnectDevice.css";
import Bar2 from "./Bar2";
const ConnectDevice = () => {
  return (
    <div className="connectDevice">
      <Bar2 />
      <div className="connectDevice__item">
        <div className="connectDevice__content">
          <div className="connectDevice__para">
            <p>Plug in the smart outlet</p>
            <p>Your device will be connect automaticly</p>
          </div>
          <div className="connectDevice__device">
            <img src={process.env.PUBLIC_URL + "/Image/device.png"} alt="" />
          </div>
          <div className="connectDevice__button">
            <Link to="/channel">
              <button>+ Add Device</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectDevice;
