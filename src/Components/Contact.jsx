
import '../styles/contact.css'
import msg_icon from '../assets/msg-icon.png'
import { FaArrowRight } from "react-icons/fa6";


import { RiMessageLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
         <p>
            Feel free to reach out through contact from or find our contact information below. Your feedback, questions, and suggestions are important
            to us as we strive to provide exceptional service to our university community.
         </p>
         <ul>
            <li><RiMessageLine color="#378725" size="1.2em" />Contact@GreatStack.dev</li>
            <li><IoCallOutline  color="#378725" size="1.2em" />+1 123-456-7890</li>
            <li><CiLocationOn color="#378725" size="1.2em" />7 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
         </ul>
        </div>
        <div className="contact-col">
            <form action="#">
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label > Write your message here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <FaArrowRight color="#378725" size="1.2em" /></button>
            </form>
            <span>sending</span>
        </div>
    </div>
  )
}

export default Contact