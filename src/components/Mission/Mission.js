import React from 'react';
import { services } from '../../constants';
import './Mission.scss';

const Mission = () => {
  return (
    <section className='services'>
        <div className='section-center'>
            <div className='services-top'>
                <p className='services-title'>Custom Furniture <br /> built only for you</p>
                <p className='services-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, reprehenderit cum, odit sequi iure dolore ipsa cupiditate deserunt laborum tenetur sint nesciunt inventore similique maiores voluptatem quisquam mollitia dolores consequatur?</p>
            </div>
            <div className='services-center'>
                {services.map((service, index) => {
                    const {icon, title, text} = service
                    return (
                        <div className='services--card' key={index}>
                            <span className='services--card-icon'>{icon}</span>
                            <p className='services--card-title'>{title}</p>
                            <p className='services--card-text'>{text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Mission
