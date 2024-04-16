// import React from 'react'
import '../styles/Program.css'
import program_1 from '../assets/train.jpg'
import program_2 from '../assets/mentoring.jpg'
import program_3 from '../assets/business.jpg'
import { FaBusinessTime } from "react-icons/fa";
import { LuUserCheck2 } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";

const Program = () => {
  return (
    <div className='Programs'>
        <div className="program">
        <img src={program_1} alt="" />
            <div className="caption">
            <FaBusinessTime  size="1.5em" />
                <p>Skills Training</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
            <LuUserCheck2  size="1.5em" />
                <p>Mentoring</p>
            </div>
        
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
            <GiSkills   size="1.5em" />
                <p>Business Development</p>
            </div>
        
        </div>
        </div>
  )
}

export default Program