import React from 'react'
import '../Component/StatusCard.css'
const StatusCard = ({imgUrl,deviceName,data}) => {
    return (
        <div className="statusCard">
            <div className="statusCard__left">
                <img src={imgUrl} alt="" />
                <div className="statusCard__detail">
                    <h3>{deviceName}</h3>
                    <p>{data}</p>
                </div>
            </div>
           <div className="statusCard__right">
               <img src={process.env.PUBLIC_URL + "/Image/switch.png"} alt="" />
               <p>edit</p>
           </div>
        </div>
    )
}

export default StatusCard
