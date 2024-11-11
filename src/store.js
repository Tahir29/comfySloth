import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/ModalSlice';
import productsReducer from './features/ProductsSlice';
import singleProductReducer from './features/SingleProductSlice';
import filterReducer from './features/FilterSlice';
import wishlistReducer from './features/WishlistSlice';
import cartReducer from './features/CartSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        products: productsReducer,
        singleProduct: singleProductReducer,
        filter: filterReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
    }
});