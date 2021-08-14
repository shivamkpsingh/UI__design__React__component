import React from 'react'
import '../Component/HomeCard.css'
const HomeCard = ({url,title}) => {
    return (
        <div className="homeCard">
            <img src={url} alt="" />
            <h3>{title}</h3>
            <p>×3 Devices</p>
        </div>
    )
}

export default HomeCard
