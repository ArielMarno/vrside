import {React, useState, useEffect} from 'react';
import '../styles/home.css';
import logo from '../assets/vrlogo.webp';
import arrow from '../assets/arrow.webp';
import vrhome from '../assets/homevr.webp';
import arrows from '../assets/360.webp';

import Burguer from './Burguer';

const Home = () => {

    const[click, setClick] = useState(false);
    const handleClick = () =>{
    //setear el booleano opuesto al actual cuando se hace click en el boton
        setClick(!click);
    }

  return (
    <div className="home">
        <div className="home__main">
            <nav>
                <div className="home__main-logo">
                    <img src={logo} alt="vr" />
                    <p>VRSIDE</p>
                </div>
                <div className={`links ${click ? 'active' : ''}`}>
                    <a href="#">Home</a>
                    <a href="#aplications">Aplications</a>
                    <a href="#headsets">Headsets</a>
                    <a href="#clients">Our Clients</a>
                    <a href="#contact" className='contact-link'>Contact Us</a>
                </div>
                <div className="vr-btn">
                    <a href="#">Contact Us</a>
                    <a href="#" className="arrow"><img src={arrow} alt="arrow" /></a> 
                </div>
                <div className="burguer">
                    <Burguer handleClick={handleClick}/>
                </div>
                
            </nav>
            <div className="home__main-title">
                <h1>CHANGE YOUR VISION</h1>
                <div className='img_container'>
                    <img src={vrhome} alt="device" className="device"/>
                </div>
                
            </div>
            <div className="home__main-content">

                <div className='arrows'>
                    <img src={arrows} alt="arrows" />
                    <p className='content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            
                <div className='users_data'>
                    <div className="users">
                      <h3>+2M</h3>
                      <p>WORLD</p>
                      <p>ACTIVE</p>
                      <p>USERS</p>  
                    </div>
                    <p className='content-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className='content-small_devices'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, magnam iure alias a inventore incidunt.</p>
                    <div className='users_360'>
                        <div className="users">
                            <h3>+2M</h3>
                            <h4>WORLD</h4>
                            <h4>ACTIVE</h4>
                            <h4>USERS</h4>  
                        </div>
                        <img src={arrows} alt="arrows" />
                    </div>
                </div>
                
           </div>
          
            
        </div>
    </div>
  )
}

export default Home