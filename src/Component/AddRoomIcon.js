import React from "react";
import "../Component/AddRoomIcon.css";
const AddRoomIcon = ({ imgUrl, title }) => {
  return (
    <div className="addroomIcon">
      <img src={imgUrl} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default AddRoomIcon;
