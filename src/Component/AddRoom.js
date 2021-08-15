import React from "react";
import { Link } from "react-router-dom";
import "../Component/AddRoom.css";
import AddRoomIcon from "./AddRoomIcon";
import addRoomIconData from "./addRoomIconData";
import Bar2 from "./Bar2";
const AddRoom = () => {
  return (
    <div className="addRoom">
      <Bar2 />
      <div className="addRoom__section">
        <div className="addRoom__input">
          <p>Enter Room's name</p>
          <input type="text" name="" id="" placeholder="Kitchen" />
        </div>
      </div>

      <div className="addRoom__room">
        <p>Select room's icon</p>
        <div className="addRoom__roomIcon">
          {addRoomIconData.map((props) => {
            return (
              <Link to="/connectdevice">
                <AddRoomIcon imgUrl={props.img} title={props.title} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
