import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Breadcrumb.scss';

const Breadcrumb = (props) => {
  const { product } = useSelector((state) => state.singleProduct);

  return (
    <div className='breadcrumb'>
      <ul className='breadcrumb-listing'>
        <li className='breadcrumb-list'><Link to='/' title='Home' className='breadcrumb-item'>Home</Link></li>
        {product ? (
          <>
            <li className='breadcrumb-list'>
              <Link to='/product' title='Product' className='breadcrumb-item'>Product</Link>
            </li>
            <li className='breadcrumb-list' style={{textTransform: 'capitalize'}}>{product.name}</li>
          </>) : (
          <li className='breadcrumb-list'>{props.title}</li>
        )}
      </ul>
    </div>
  )
}

export default Breadcrumb
