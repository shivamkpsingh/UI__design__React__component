import React from "react";
import { Link } from "react-router-dom";
import "../Component/ChannelDevice.css";
import Bar2 from "./Bar2";
const ChannelDevice = () => {
  return (
    <div className="channelDevice">
      <Bar2 />
      <div className="channelDevice__button">
        <button>1 Ch Device</button>
        <button>2 Ch Device</button>
        <Link to="/adddevice">
          <button>4 Ch Device</button>
        </Link>

        <button>8 Ch Device</button>
        <button>18 Ch Device</button>
      </div>
    </div>
  );
};

export default ChannelDevice;
