import React from 'react'
import '../Component/ProfileCard.css'
const ProfileCard = () => {
    return (
        <div className="profileCard">
            <img  className="profile__pic" src={process.env.PUBLIC_URL + "/Image/profile.png"} alt="" />
            <p>Daren</p>
            <img className="profile__switch" src={process.env.PUBLIC_URL + "/Image/turnOn.png"} alt="" />
        </div>
    )
}

export default ProfileCard
