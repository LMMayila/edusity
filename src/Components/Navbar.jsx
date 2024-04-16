import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/yolo7-removebg.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
 const [sticky, setSticky] = useState(false);
 const [mobileMenu, setMobileMenu] = useState(false);

 useEffect(() => {
   window.addEventListener('scroll', () => {
     window.scrollY > 50 ? setSticky(true) : setSticky(false);
   });
 }, []);

 const toggleMenu = (e) => {
   if (mobileMenu && e.target.closest('.menu-icon')) {
     setMobileMenu(false);
   } else {
     setMobileMenu(!mobileMenu);
   }
 };

 const handleLinkClick = () => {
   setMobileMenu(false);
 };

 return (
   <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
     <img src={logo} alt="" className="logo" />
     <ul
       className={`${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'} fade-in`}
       onClick={(e) => e.stopPropagation()}
     >
       <li>
         <Link to="hero" smooth={true} offset={0} duration={500} onClick={handleLinkClick}>
           Home
         </Link>
       </li>
       <li>
         <Link to="program" smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
           Program
         </Link>
       </li>
       <li>
         <Link to="about" smooth={true} offset={-150} duration={500} onClick={handleLinkClick}>
           About us
         </Link>
       </li>
       <li>
         <Link to="campus" smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
           Campus
         </Link>
       </li>
       <li>
         <Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={handleLinkClick}>
           Testimonials
         </Link>
       </li>
       <li>
         <Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={handleLinkClick}>
           Contact us
         </Link>
       </li>
     </ul>
     <div className="menu-icon" onClick={toggleMenu}>
       {mobileMenu ? <FaTimes /> : <FaBars />}
     </div>
     {mobileMenu && <div className="overlay" onClick={toggleMenu}></div>}
   </nav>
 );
};

export default Navbar;