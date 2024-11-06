import React from 'react'
import './Footer.css'
import { FaUser } from 'react-icons/fa';

function Footer() {
  return (
    <div className='cls-footer'>
        <div className="cls-footer-top">
            <div className="cls-footer-top-left">
                <img src="" alt="" />
                <p>I'm frontend developer from Egypt ,with 1 year of experience.</p>
            </div>
            <div className="cls-footer-top-right">
                <div className="cls-footer-email-input">
                    <FaUser size={30} />
                    <input type="email" name="email" placeholder='Enter Your Email'/>
                </div>
                <div className="cls-footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="cls-footer-bottom">
            <p className='cls-footer-bottom-left'>Made With Love By Heba Mohamed Sayed &copy; 2024</p>
        <div className="cls-footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
        </div>
    </div>
  )
}

export default Footer;