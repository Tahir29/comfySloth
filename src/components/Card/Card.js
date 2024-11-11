import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../features/ProductsSlice';
import { setSingleProduct } from '../../features/SingleProductSlice';
import { toggleWishlist } from '../../features/WishlistSlice';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import './Card.scss';

const Card = ({ products, viewMode }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.products);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (productId) => {
    dispatch(setSingleProduct(productId));
    navigate(`/product/${productId}`);
  }

  const handleWishlistToggle = (product) => {
    const isWishlisted = wishlistItems.some((item) => item.id === product.id);
    dispatch(toggleWishlist(product));

    if (isWishlisted) {
      toast.info(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist`);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className={`card--wrapper ${viewMode}`}>
      {products.map((product) => {
        const isWishlisted = wishlistItems.some((item) => item.id === product.id);
        return (
          <div className='card' key={product.id}>
            <div className="card-top">
              {product.shipping === true && <div className='card-tag'>Free Shipping</div>}
              <div className='card-wishlist' onClick={() => handleWishlistToggle(product)}>
                {isWishlisted ? <IoHeartSharp /> : <IoHeartOutline />}
              </div>
            </div>
            <div className='card-middle' onClick={() => handleClick(product.id)}>
              <div className='card-image'>
                <img src={product.image} alt={product.name} className='img-fluid' />
              </div>
            </div>
            <div className="card-bottom" onClick={() => handleClick(product.id)}>
              <div className="card-title">{product.name}</div>
              <div className="card-price">&#8377;{product.price}</div>
              {viewMode === 'list' && <p className='card-description'>{product.description}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
