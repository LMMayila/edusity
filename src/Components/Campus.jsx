import React from 'react'
import '../styles/campus.css'
import gallery_1 from '../assets/smf2.jpeg'
import gallery_2 from '../assets/smf5.jpeg'
import gallery_3 from '../assets/smf6.jpeg'
import gallery_4 from '../assets/yolo2.jpeg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}
    </div>
  )
}

export default Campus