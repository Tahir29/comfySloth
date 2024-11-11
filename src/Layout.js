import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from './components'

const Layout = () => {
  return (
    <div className='main'>
      <Header />
      <Outlet />        
      <Footer />
    </div>
  )
}

export default Layout
