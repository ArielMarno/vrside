import React from 'react'
import '../styles/aplications.css';
import arrow from '../assets/arrow.webp';

import medicine from '../assets/aplications/aplication1.webp';
import engineering from '../assets/aplications/aplication2.webp';
import gameplay from '../assets/aplications/aplication3.webp';

const Card = ({ image, title}) => {
    return (
        <div className='card'>  
            <img src={image} alt={image} />
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
    )
};

const Aplications = () => {
  return (
    <div className='aplications' id='aplications'>
        <div className='aplications__title'>
            <h2>VR APLICATIONS</h2>
            <div className="vr-btn">
                <a href="#">View More</a>
                <a href="#" className="arrow"><img src={arrow} alt="arrow" /></a> 
            </div>
        </div>

        <div className='aplications__cards'>
            <Card image={medicine} title="Medicine"/>
            <Card image={engineering} title="Engineering"/>
            <Card image={gameplay} title="Gameplay Experience"/>
        </div>
    </div>
  )
}

export default Aplications