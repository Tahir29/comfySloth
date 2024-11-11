import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Breadcrumb } from '../components';
import { toast } from 'react-toastify';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../features/CartSlice';
import { IoTrash } from "react-icons/io5";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    toast.info('Product removed from cart');
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <main className='page-bleeding'>
        <p className='cart-empty'>Your cart is empty.</p>
      </main>
    ) 
  }

  return (
    <main className='page-bleeding'>
      <Breadcrumb title='Cart' />
      <div className='cart'>
        <div className='cart--left'>
          <div className='cart--wrapper'>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className='cart--item'>
                  <div className='cart--item-left'>
                    {/* <img src={item.images[0].url} alt={item.name} className='img-fluid cart--item-image' />   */}
                    <img src={item.image || item.images[0].url} alt={item.name} className='img-fluid cart--item-image' />  
                  </div>
                  <div className='cart--item-center'>
                    <div className='cart--item-content'>
                      <p className='cart--item-name'>{item.name}</p>
                      <p className='cart--item-price'>&#8377;{item.price * item.quantity}</p>
                    </div>
                    <div className='cart--item-action'>
                      <button onClick={() => handleDecrement(item)} disabled={item.quantity === 1} className='cart--item-action-btn'>-</button>
                      <p className='cart--item-qty'>{item.quantity}</p>
                      <button onClick={() => handleIncrement(item)} className='cart--item-action-btn'>+</button>
                    </div>
                  </div>
                  <div className='cart--item-right'>
                    <button onClick={() => handleRemoveFromCart(item)} className='cart--item-delete'><IoTrash /></button>
                  </div>
                </div>
              ))
            ) : (
              <p className='cart-empty'>Your cart is empty.</p>
            )}
          </div>
        </div>
        <div className='cart--right'>
          <div className='orderSummary'>
            <h3>Order Summary</h3>
            <p className='orderSummary-total'>Total Amount: &#8377;{totalAmount}</p>
          </div>
        </div>        
      </div>
    </main>
  )
}

export default Cart
