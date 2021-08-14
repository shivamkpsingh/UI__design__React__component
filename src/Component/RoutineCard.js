import React from 'react'
import '../Component/RoutineCard.css'
const RoutineCard = () => {
    return (
        <div className="routineCard">
            <div className="routineCard__header">
                <p>Good Morning</p>
                <img src={process.env.PUBLIC_URL + "/Image/turnOn.png"} alt="" />
            </div>
            <div className="routineCard__time">
                <div className="routineCard__timeLeft">
                    <div className="timeLeftUp">
                        <img src={process.env.PUBLIC_URL + "/Image/watch.png"} alt="" />
                        <p>9:00am</p>
                    </div>
                    <div className=" timeLeftUp timeLeftDown">
                        <img src={process.env.PUBLIC_URL + "/Image/calendar.png"} alt="" />
                        <p>Every Day</p>
                    </div>
                </div>
                <div className="routineCard__timeRight">
                       <p>×3 divices</p>
                       <img src={process.env.PUBLIC_URL + "/Image/nextIcon.png"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default RoutineCard
