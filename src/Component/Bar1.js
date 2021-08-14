import React from 'react'
import '../Component/Bar1.css'
const Bar1 = () => {
    return (
        <div className="bar1">
            <img src={process.env.PUBLIC_URL + "/Image/less.png"} alt="" />
            <h2>Add Room</h2>
            <p>Save</p>
        </div>
    )
}

export default Bar1
