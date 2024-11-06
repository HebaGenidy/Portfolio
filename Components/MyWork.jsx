import React from 'react'
import './MyWork.css'
import MyWorkData from './MyWorkData.jsx'
import arrowRight from '../src/assets/arrowRight.png'


function MyWork() {
  return (
    <div className='cls-my-work'>
        <div className="my-work-title">
            <h1>My Latest Work</h1>
            <img src="" alt="" />
        </div>
        <div className="my-work-container">
            {MyWorkData.map((work,index)=>{
                return <img key={index} src={work.w_img} width={'80%'}  alt=''/>
            })}
        </div>
    </div>
  )
}

export default MyWork;