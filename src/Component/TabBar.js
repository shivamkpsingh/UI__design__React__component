import React from 'react'
import '../Component/TabBar.css'
const TabBar = () => {
    return (
        <div className="tabBar">
            <div className="tabBar__icon">
                <img src={process.env.PUBLIC_URL + "/Image/homeIcon.png"} alt="" />
                <p>Home</p>
            </div>
            <div className="tabBar__icon">
                <img src={process.env.PUBLIC_URL + "/Image/static.png"} alt="" />
                <p>Statics</p>
            </div>
            <div className="tabBar__icon">
                <img src={process.env.PUBLIC_URL + "/Image/routin.png"} alt="" />
                <p>Routine</p>
            </div>
            <div className="tabBar__icon">
                <img src={process.env.PUBLIC_URL + "/Image/setting.png"} alt="" />
                <p>Setting</p>
            </div>
        </div>
    )
}

export default TabBar
