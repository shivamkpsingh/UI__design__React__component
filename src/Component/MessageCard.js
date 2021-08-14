import React from 'react'
import '../Component/MessageCard.css'
const MessageCard = () => {
    return (
        <div className="messageCard">
            <img src={process.env.PUBLIC_URL + "/Image/Group.png"} alt="" />
            <div className="messageCard__details">
                <p className="messageCard__Para1">Lighting will soon fail</p>
                <p className="messageCard__Para2">Kitchen</p>
            </div>
        </div>
    )
}

export default MessageCard
