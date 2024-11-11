import { createSlice } from "@reduxjs/toolkit";
import { products_url } from "../constants/products";

const initialState = {
    products: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setProducts, setLoading, setError } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      dispatch(setProducts(products_url));
      dispatch(setLoading(false));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
}

export default productsSlice.reducer;