import React from 'react'
import '../Component/HomeBar.css'
const HomeBar = () => {
    return (
        <div className="homeBar">
            <div className="homeBar__left">
                <img src={process.env.PUBLIC_URL + "/Image/home.png"} alt="" />
                <p>My Home</p>
            </div>
            <img src={process.env.PUBLIC_URL + "/Image/Vector 8.png"} alt="" />
        </div>
    )
}

export default HomeBar
