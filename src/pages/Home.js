import React from 'react';
import { Hero, Mission, FeaturedProducts } from '../components';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Mission />
      <FeaturedProducts />
    </div>
  )
}

export default Home
