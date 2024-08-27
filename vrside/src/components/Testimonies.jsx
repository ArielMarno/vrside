import React from 'react';
import '../styles/testimonies.css';

import user2 from '../assets/testimonies/user2.webp';
import user3 from '../assets/testimonies/user3.webp';


const Card = ({image, name}) =>{
  return(
    <div className='card'>
      <img src={image} alt={image} />
      <h3>"</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <h4>{name}</h4>
    </div>
  )
}

const Testimonies = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='testimonies' id='clients'>
        <div className='testimonies__title'>
          <h2>OUR CLIENTS SAY</h2>
          <div className='arrows'>
            <i id="left" className="fa-solid fa-angle-left" onClick={()=> scroll('left')}></i>
            <i id="right" className="fa-solid fa-angle-right" onClick={()=> scroll('right')}></i>
          </div>

        </div>
        <div className='testimonies__carousel' ref={scrollRef}>
          <Card image={user3} name="Robert Johnson"/>
          <Card image={user2} name="Lorena Williams"/>
          <Card image={user3} name="Chris Baker"/>
          <Card image={user2} name="Jessica Brand"/>
        </div>
    </div>
  )
}

export default Testimonies