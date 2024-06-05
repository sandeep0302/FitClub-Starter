import React from 'react'
import './Hero.css'
import Header from '../../Header/Header'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        <div className="the-best-ad">
          <div>
          </div>
          <span>The best fitness club in town</span>
        </div>
      </div>
      <div className='right-h'>right side</div>
    </div>
  )
}

export default Hero
