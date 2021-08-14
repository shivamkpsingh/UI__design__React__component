import React from "react";
import "../Component/Rooms.css";
import HomeCard from "./HomeCard";
import homeCardData from "./homeCardData";
import TabBar from "./TabBar";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="rooms__header">
        <div className="rooms__headerUP">
          <div className="room__headerUPLeft">
            <h1>Your Home</h1>
            <div className="room__address">
              <img src={process.env.PUBLIC_URL + "/Image/address.png"} alt="" />
              <p>2715 Ash Dr. san jose, south Dakota </p>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/Image/profile.png"} alt="" />
        </div>
        <div className="rooms__headerDown">
          <h1>ROOMS</h1>
          <img src={process.env.PUBLIC_URL + "/Image/add.png"} alt="" />
        </div>
      </div>
      <div className="rooms__middle">
        {homeCardData.map((props) => {
          return <HomeCard url={props.img} title={props.title} />;
        })}
      </div>
      <div className="rooms__footer">
        <TabBar />
      </div>
    </div>
  );
};

export default Rooms;
