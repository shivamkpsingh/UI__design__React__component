import React from "react";
import "../Component/ChannelDevice.css";
import Bar2 from "./Bar2";
const ChannelDevice = () => {
  return (
    <div className="channelDevice">
      <Bar2 />
      <div className="channelDevice__button">
        <button>1 Ch Device</button>
        <button>2 Ch Device</button>
        <button>4 Ch Device</button>
        <button>8 Ch Device</button>
        <button>18 Ch Device</button>
      </div>
    </div>
  );
};

export default ChannelDevice;
