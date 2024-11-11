import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setSingleProduct, clearSingleProduct } from '../../features/SingleProductSlice';
import { toggleWishlist } from '../../features/WishlistSlice';
import { addToCart } from '../../features/CartSlice';
import { IoStar, IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import './SingleProduct.scss';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { product } = useSelector((state) => state.singleProduct);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  useEffect(() => {
    dispatch(setSingleProduct(productId));
    
    return () => {
      dispatch(clearSingleProduct());  // Clear product when leaving page
    };
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
    // toast.success('Product added to cart');
    // setTimeout(() => {
    //   navigate('/cart');
    // }, 3500);
  };

  const handleWishlistToggle = (product) => {
    const isWishlisted = wishlistItems.some((item) => item.id === product.id);
    dispatch(toggleWishlist(product));

    if (isWishlisted) {
      toast.info(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist`);
    }
  };

  if (!product) return (
    <div className='page-bleeding'>
      <p>Product not found</p>
    </div>
  );

  const isWishlisted = wishlistItems.some((item) => item.id === product.id);  

  return (
    <div className="singleProduct">
      <div className='singleProduct-left'>
        <div className='singleProduct--imgWrapper'>
          {product.images.map((image) => (
            <img key={image.id} src={image.url} alt={product.name} className='singleProduct--imgWrapper-img img-fluid' />
          ))}
        </div>
      </div>
      <div className='singleProduct-right'>
        <div className='singleProduct--content'>
          <div className='singleProduct-wishlist' onClick={() => handleWishlistToggle(product)}>
            {isWishlisted ? <IoHeartSharp /> : <IoHeartOutline />}
          </div>
          <h1 className='singleProduct-title'>{product.name}</h1>
          <div className='singleProduct--info'>
            <div className='singleProduct--info-ratingsReviews'>
              {product.stars}
              <IoStar />
              {product.reviews}
            </div>
            {product.shipping && <p className='singleProduct-shipping'>Free Shipping</p>}
          </div>
          <div className='singleProduct--ps'>
            <p className='singleProduct--ps-price'>&#8377;{product.price}</p>
            <p className='singleProduct--ps-stock'>Stock: <span>{product.stock}</span></p>
          </div>
          <p className='singleProduct-desc'>{product.description}</p>
          <div className='singleProduct--cc'>
            <p className='singleProduct--cc-category'>Category: <span>{product.category}</span></p>
            <p className='singleProduct--cc-company'>Company: <span>{product.company}</span></p>
          </div>
          <div className='singleProduct--colors'>
            {product.colors.map((color, index) => (
              <div className='singleProduct--colors-item' key={index} style={{backgroundColor: color}}></div>
            ))}
          </div>
        </div>
        <div className='singleProduct--atc' onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}>Add To Cart</div>
      </div>
    </div>
  );
};

export default SingleProduct;
