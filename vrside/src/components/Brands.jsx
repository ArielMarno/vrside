import React from 'react'
import '../styles/brands.css';
import oculus from '../assets/brands/oculus.webp';
import meta from '../assets/brands/meta.webp';
import xbox from '../assets/brands/xbox.webp';
import playstation from '../assets/brands/playstation.webp';
import netflix from '../assets/brands/netflix.webp';
import google from '../assets/brands/google.webp';

const Brands = () => {
  return (
    <div className='brands'>
        <div className='brands_first-row'>
            <img src={oculus} alt="oculus" />
            <img src={meta} alt="meta" />
            <img src={xbox} alt="xbox" />
        </div>
        <div className='brands_second-row'>
            <img src={playstation} alt="playstation" />
            <img src={netflix} alt="netflix" />
            <img src={google} alt="google" />
        </div>
    </div>
  )
}

export default Brands