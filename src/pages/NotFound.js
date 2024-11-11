import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='page-bleeding'>
      <div className='notFound'>
        <p className='notFound-title'>404</p>
        <p className='notFound-para'>The page you're looking for does not exist</p>
        <Link className='notFound-action' to="/" title="Back To Home">Back To Home</Link>
      </div>
    </div>
  )
}

export default NotFound
