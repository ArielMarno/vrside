import React from 'react';
import '../styles/promotions.css';
import device from '../assets/subscribevr.webp';

const Promotions = () => {
  return (
    <div className='promotions' id='contact'>
        <div className='promotions__card'>
            <div className='card_content'>
                <h2>SUBSCRIBE TO RECEIVE <br />OFFERS AND PROMOTIONS</h2>
                <p>You will be the firts to know</p>
                <div className='card_input'>
                    <input type="mail" placeholder='Enter your email adress'/>
                    <a href='#'>Contact Us</a>
                </div>
            </div>
            <div className='card_img'>
                <img src={device} alt="vr device" />
            </div>
        </div>
    </div>
  )
}

export default Promotions