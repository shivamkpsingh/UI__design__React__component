import React from 'react'
import '../Component/StatusCard.css'
const StatusCard = () => {
    return (
        <div className="statusCard">
            <div className="statusCard__left">
                <img src={process.env.PUBLIC_URL + "/Image/light.png"} alt="" />
                <div className="statusCard__detail">
                    <h3>Light 2</h3>
                    <p>80%</p>
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
