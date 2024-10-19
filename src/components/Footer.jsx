import React from 'react'
import '../styles/footer.css';

import logo from '../assets/vrlogo.webp';

import x from '../assets/socials/x.webp';
import fb from '../assets/socials/fb.webp';
import ig from '../assets/socials/ig.webp';
import tg from '../assets/socials/tg.webp';



const Footer = () => {
  return (
    <div className='footer'>
        <div className='navbar'>
            <div className='footer-logo'>
                <img src={logo} alt="device" />
                <p>VRSIDE</p>
            </div>
            <div className='footer-links'>
                <a href="#">Home</a>
                <a href="#aplications">Aplications</a>
                <a href="#headsets">Headsets</a>
                <a href="#clients">Our Clients</a>
            </div>
            <div className='footer-socials'>
                <a href="#"><img src={x} alt="x" /></a>
                <a href="#"><img src={tg} alt="telegram" /></a>
                <a href="#"><img src={ig} alt="instagram" /></a>
                <a href="#"><img src={fb} alt="facebook" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer