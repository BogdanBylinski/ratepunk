import React from 'react';
import "../styles/_Footer.scss";
import logo from "../assets/logo.svg";
import {ReactComponent as Email} from "../assets/email-footer.svg";
import {ReactComponent as Instagram} from "../assets/instagram.svg";
import {ReactComponent as Facebook} from "../assets/facebook.svg";
import {ReactComponent as Linkedin} from "../assets/linkedin.svg";
import {ReactComponent as Twitter} from "../assets/twitter.svg";
import {ReactComponent as Tiktok} from "../assets/tiktok.svg";




function Footer() {
  return (
    <footer className='footer'>
     <div className="footerContainer">
       <div className="footerContainer__left">
         <div className="footerContainer__left_logo">
             <a href="#;">
             <img src={logo} alt="ratepunk logo" />
             </a>
             <p>Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you're getting the best deal!</p>
         </div>
         <div className="footerContainer__left_copyright">
             <p>&copy; 2021 Ratepunk. All Rights Reserved.</p>
         </div>
       </div>
       <div className="footerContainer__right">
         <div className="footerContainer__right_item">
           <div className="footerContainer__right_item--quickLinks">
               <div className="heading">Quick Links</div>
               <div className="links">
               <a href="#;">Price Comparison</a>
               <a href="#;">Chrome Extension</a>
               <a href="#;">Safari Extension</a>
               <a href="#;">Firefox Extension</a>
               <a href="#;">How it works</a>
               <a href="#;" >Ratepunk Blog</a>
               <a href="#;">Privacy Policy</a>
               </div>
           </div>
         </div>
         <div className="footerContainer__right_item">
           <div className="footerContainer__right_item--contacts">
               <div className="heading">Contact</div>
               <a href="mailto:hi@ratepunk.com">
                   <Email className='svg'></Email> hi@ratepunk.com
               </a>
           </div>
           <div className="footerContainer__right_item--socials">
               <div className="heading">Social</div>
               <div className="sociallinks">
                   <a href="#;">
                       <div className="socialLink">
                            <Instagram></Instagram>
                       </div>
                   </a>
                   <a href="#;">
                       <div className="socialLink">
                           <Facebook></Facebook>
                       </div>
                   </a>
                   <a href="#;">
                       <div className="socialLink">
                            <Linkedin></Linkedin>
                       </div>
                   </a>
                   <a href="#;">
                       <div className="socialLink">
                            <Twitter></Twitter>
                       </div>
                   </a>
                   <a href="#;">
                       <div className="socialLink">
                            <Tiktok></Tiktok>
                       </div>
                   </a>
               </div>
               
           </div>
           <div className="footerContainer__right_item--copyright">
             <p>&copy; 2021 Ratepunk. All Rights Reserved.</p>

           </div>
         </div>
       </div>
     </div>
   </footer>

  )
}

export default Footer