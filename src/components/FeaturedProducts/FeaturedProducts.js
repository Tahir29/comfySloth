import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import { fetchProducts } from '../../features/ProductsSlice';
import { setSingleProduct } from '../../features/SingleProductSlice';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Card/Card.scss';
import './FeaturedProducts.scss';

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleClick = (productId) => {
        dispatch(setSingleProduct(productId));
        navigate(`/product/${productId}`);
    }

    var settings = {
        dots: true,
        arrows: true,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        prevArrow: <div><IoChevronBackOutline /></div>,
        nextArrow: <div><IoChevronForwardOutline /></div>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                autoplay: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                arrows: false,
                slidesToShow: 1,
                autoplay: true,                
              }
            }
        ]
    };
    
    return (
        <div className='featured'>
            <div className='section-center'>
                <p className='featured-title'>Featured Products</p>
                <div className='featured-wrapper'>
                    <Slider {...settings}>
                        {products.map((product) => (
                            <div className='card' key={product.id} onClick={() => handleClick(product.id)}>
                                {product.shipping === true && <div className="card-top"><div className='card-tag'>Free Shipping</div></div>}
                                <div className='card-middle'>
                                <div className='card-image'>
                                    <img src={product.image} alt={product.name} className='img-fluid' />
                                </div>
                                </div>
                                <div className="card-bottom">
                                <div className="card-title">{product.name}</div>
                                <div className="card-price">&#8377;{product.price}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
