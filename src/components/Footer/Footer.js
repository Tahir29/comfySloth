import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy;{new Date().getFullYear()}</p>
        <p>Comfy Sloth.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
