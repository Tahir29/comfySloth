import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { navList } from '../../constants';
import { logoImg } from '../../utils';
import { IoHeartOutline, IoBagOutline, IoPersonOutline, IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wishlistItems = useSelector((state) => state.wishlist.items); 
  const cartItems = useSelector((state) => state.cart.items);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className='navbar'>
      <div className="navbar-left">
        <div className='navbar-menu'>
          <button onClick={toggleMenu} className='navbar-menu-toggle'>
            {isMenuOpen ? <IoCloseOutline /> : <IoMenuSharp /> }
          </button>
        </div>
        <Link to="/" title='Comfy Sloth' className='navbar-logo'>
          <img src={logoImg} alt="Logo" className='img-fluid' />
        </Link>
      </div>
      <div className="navbar-center">
        <nav className={`navbar-list ${isMenuOpen ? 'open' : ''}`}>
          {navList.map((item, index) => (
            <NavLink key={index} to={item.url} title={item.title} className={({isActive}) => (isActive ? 'active navbar-item' : 'navbar-item')} onClick={closeMenu}>{item.title}</NavLink>
          ))}
        </nav>
      </div>
      <div className="navbar-right">
          <div className='navbar--action'>
            <Link to='/wishlist' title='Wishlist' className='navbar--action-item'>
              <IoHeartOutline />
              {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}              
            </Link>
            <Link to='/cart' title='Cart' className='navbar--action-item'>
              <IoBagOutline />
              {cartItems.length > 0 && <span>{cartItems.length}</span>}              
            </Link>
            {/* <div className='navbar--action-item'><IoPersonOutline /></div> */}
          </div>
      </div>      
    </header>
  )
}

export default Header
