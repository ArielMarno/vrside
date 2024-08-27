import React from 'react'
import '../styles/products.css';
import arrow from '../assets/arrow.webp';
import cambria from '../assets/products/product1.webp';
import neuris from '../assets/products/product2.webp';
import plus from '../assets/products/product3.webp';





const Products = () => {
  return (
    <div className='products' id='headsets'>
        <div className='products__title'>
            <h2>VR HEADSETS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='products__grid'>
            <div className='card-col'>
                <div className='aside_content'>
                    <h3>Project Cambria</h3>
                    <div className="vr-btn">
                        <a href="#">Buy Now</a>
                        <a href="#" className="arrow"><img src={arrow} alt="arrow" /></a> 
                    </div>
                </div>
            <img src={cambria} alt="cambria" />
            </div>

            <div className='card-row'>
                <div className='aside_content'>
                    <h3>Neuris VR Hybrid</h3>
                    <div className="vr-btn">
                        <a href="#">Buy Now</a>
                        <a href="#" className="arrow"><img src={arrow} alt="arrow" /></a> 
                    </div>
                </div>
                <img src={neuris} alt="neuris" />
            </div>

            <div className='card-row'>
                <div className='aside_content'>
                    <h3>VR Case <br />5 Plus</h3>
                    <div className="vr-btn">
                        <a href="#">Buy Now</a>
                        <a href="#" className="arrow"><img src={arrow} alt="arrow" /></a> 
                    </div>
                </div>
                
                <img src={plus} alt="plus" />
            </div>
        </div>
    </div>
  )
}

export default Products