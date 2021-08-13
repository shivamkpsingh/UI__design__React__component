import React from 'react'
import '../Component/StaticsCard.css'

const StaticsCard = () => {
    return (
        <div className="staticCard">
             <div className="details__cardMeter">
        <div className="meter">
          <div className="details__cardMeterNumber">
            <h1>337</h1>
            <p>KWH</p>
          </div>
          <div className="details__cardMeterPara">
            <img src={process.env.PUBLIC_URL + "/Image/Vector 21.png"} alt="" />
            <p>Decrease 27%</p>
          </div>
        </div>
        <hr />
        <div className="meter">
          <div className="details__cardMeterNumber">
            <h1>163</h1>
            <p>USD</p>
          </div>
          <div className="details__cardMeterPara">
            <img src={process.env.PUBLIC_URL + "/Image/Vector 21.png"} alt="" />
            <p>Decrease 19%</p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default StaticsCard
