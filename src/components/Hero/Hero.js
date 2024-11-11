import React from 'react';
import { Link } from 'react-router-dom';
import { heroImage1, heroImage2 } from '../../utils/index';
import './Hero.scss';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='section-center'>
        <div className='hero-wrapper'>
            <div className='hero--content'>
                <h1 className='hero--content-title'>Design your <br /> comfort zone</h1>
                <p className='hero--content-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae esse distinctio perspiciatis nemo qui. Eius, doloremque? Placeat accusantium incidunt voluptate hic beatae iure quia ex eum perferendis, numquam necessitatibus!</p>
                <Link to='/product' className='base_btn btn_md primary_btn hero--content-action' title='Shop Now'>Shop Now</Link>
            </div>
            <div className='hero--imgContainer'>
                <img src={heroImage1} alt="Hero Image 1" className='img-fluid hero--imgContainer-main' />
                <img src={heroImage2} alt="Hero Image 2" className='img-fluid hero--imgContainer-accent' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
