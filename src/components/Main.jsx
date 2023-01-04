import React from 'react'
import bgv from '../assets/bgv.mp4'

const Main = () => {
  return (
    <div className='main'>
        <video src={bgv} autoPlay loop muted/>
        

    </div>
  )
}

export default Main