
import '../styles/About.css'
import about_img from '../assets/smf1.jpeg'



const About = () => {
  return (
    <div className='about'>
        <div className="aboutleft">
   <img src={about_img} alt="" className='about-img'/>
   
        </div>
     <div className="aboutright">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
        At the Start Small Foundation, we believe that every great achievement begins with a modest first step. Our mission is to empower startup founders to embrace their humble beginnings and turn their small startups into remarkable success stories.</p>
        <p>
        We understand the challenges that entrepreneurs face in the early stages of their ventures – limited resources, lack of guidance, and the daunting task of navigating the business world. That's why we're dedicated to providing a nurturing environment where founders can access essential support, networking opportunities, and the tools they need to thrive.</p>
        <p>
        The Start Small Foundation is more than just a support system; it's a catalyst for growth, a haven for innovation, and a testament to the power of starting small with a clear vision for future success. Join us on this journey, and let us guide you through the initial steps of your entrepreneurial venture, one small step at a time</p>
    </div>
    </div>
  )
}

export default About