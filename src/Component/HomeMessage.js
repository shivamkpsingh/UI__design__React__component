import React from 'react'
import '../Component/HomeMessage.css'
const HomeMessage = () => {
    return (
        <div className="homeMessage">
            <img src={process.env.PUBLIC_URL + "/Image/Group1.png"} alt="" />
            <div className="homeMessage__details">
                <p className="homeMessage__Para1">Lighting will soon fail</p>
                <p className="homeMessage__Para2">Gurrage</p>
            </div>
        </div>
    )
}

export default HomeMessage
