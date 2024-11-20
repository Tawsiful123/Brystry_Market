import React, { Component } from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

export class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="Hand Icon" />
            </div>
            <p>collection</p>
            <p>for everybody</p>
          </div>
        </div>

        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>

        <div className="hero-right">
          <img src={hero_image} alt="Hero Image" />
        </div>
      </div>
    );
  }
}

export default Hero;