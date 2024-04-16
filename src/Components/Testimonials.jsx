import React, { useRef } from 'react'
import '../styles/Testimonials.css'
import next_icon from '../assets/next-icon.png'
import prev_icon from '../assets/back-icon.png'
import user_1 from '../assets/sis1.jpeg'
import user_2 from '../assets/felix.jpeg'
import user_3 from '../assets/nwabisa.jpeg'
import user_4 from '../assets/siphosoxolo.jpeg'



const Testimonials = () => {
   const slider = useRef();
   let tx=0;

    const slideForward = ()=>{
     if (tx>-50){
        tx -= 25;
     }
     slider.current.style.transform =`translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if (tx<0){
            tx += 25;
         }
         slider.current.style.transform =`translateX(${tx}%)`;
    }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={prev_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref= {slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                        <h3>
                        Mrs Yonela Mneno
                    </h3>
                    <span>Founder</span>
                        </div>
                    </div>
                    <p>
                    Joined SSF for business guidance as an aspiring entrepreneur. Became a mentor unexpectedly. Programs perfectly prepared me to confidently launch my brand thanks to SSF
                  </p>
                </div>
                
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                        <h3>
                        Felix Chimbinyu
                    </h3>
                    <span>Speaker</span>
                        </div>
                    </div>
                    <p>
                    Profoundly grateful for the chance to showcase speaking/facilitating skills. Your support is an immense blessing allowing me to pursue my passion. Forever thankful
                    </p>
                </div>
                
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                        <h3>
                        Nwabisa Mbekela
                    </h3>
                    <span>Founder</span>
                        </div>
                    </div>
                    <p>
                    Joined SSF when starting my business. They provided invaluable training, networking opportunities and engaging events. Learned crucial skills like voice projection and business tools. The initiative feels like a nurturing home.
                    </p>
                </div>
                
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                        <h3>
                        Siphosoxolo Dingi
                    </h3>
                    <span>PR Intern</span>
                        </div>
                    </div>
                    <p>
                    The experience obtained has been of excellence. I have learnt a lot about the organization and I hope to learn more especially when it comes to applying for funding, writing press release, creating newsletters and facilitating meetings</p>
                </div>
                
            </li>
          </ul>
        </div>
        </div>
  )
}

export default Testimonials