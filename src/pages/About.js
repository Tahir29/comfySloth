import React from 'react';
import { Breadcrumb } from '../components/index';
import { heroImage3 } from '../utils/index';

const About = () => {
  return (
    <main className='page-bleeding'>
      <Breadcrumb title='About' />
      <div className='section-center about'>
        <div className='about-left'>
          <img src={heroImage3} alt="About" className='img-fluid about-image' />
        </div>
        <div className='about-right'>
          <div className="about--content">
            <h1 className='about--content-title'>Our Story</h1>
            <p className='about--content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat modi suscipit quidem, nostrum, quam, et perferendis esse aliquam fugiat deserunt ipsa hic accusamus? Ratione harum sapiente corrupti deserunt sequi!</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
