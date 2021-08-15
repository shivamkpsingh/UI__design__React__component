import React from 'react'
import '../Component/DeviceEdit.css'
import StatusCard from './StatusCard';
import  statusCardData from "./statusCardData";

const DeviceEdit = () => {
    return (
        <div className="deviceEdit">
           <div className="deviceEdit__colomn">
               {
                   statusCardData.map((props)=>{
                       return(
                           <StatusCard imgUrl={props.img} deviceName={props.diviceName} data={props.data}/>
                       )
                   })
               }
           </div>
        </div>
    )
}

export default DeviceEdit
