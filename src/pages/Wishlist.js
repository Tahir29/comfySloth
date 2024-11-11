import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb } from '../components';
import { removeFromWishlist } from '../features/WishlistSlice';
import { addToCart as addToCartSlice } from '../features/CartSlice';
import { toast } from 'react-toastify';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleRemoveFromWishlist = (product) => {
    toast.info('Product removed from wishlist');
    dispatch(removeFromWishlist(product));
  };

  const handleAddToCart = (product) => {
    toast.success('Product moved to cart');
    dispatch(addToCartSlice(product));
    dispatch(removeFromWishlist(product)); // Remove from wishlist when added to cart
  };

  if (wishlistItems.length === 0) {
    return (
      <main className='page-bleeding'>
        <p className='wishlist-empty'>Your wishlist is empty.</p>
      </main>
    );
  }

  return (
    <main className='page-bleeding'>
      <Breadcrumb title='Wishlist' />
      <div className='wishlist-container'>
        <div className='wishlist--items'>
          {wishlistItems.map((item) => (
            <div className='wishlist--item' key={item.id}>
              <img src={item.image} alt={item.name} className='wishlist--item-image img-fluid' />
              <div className='wishlist--content-wrapper'>
                <div className='wishlist--content'>
                  <p className='wishlist--content-name'>{item.name}</p>
                  <p className='wishlist--content-price'>&#8377;{item.price}</p>
                </div>
                <div className='wishlist--action'>
                  <button onClick={() => handleRemoveFromWishlist(item)} className='base_btn btn_sm secondary_btn wishlist--action-child'>Remove</button>
                  <button onClick={() => handleAddToCart(item)} className='base_btn btn_sm primary_btn wishlist--action-child'>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
