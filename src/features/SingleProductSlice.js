import { createSlice } from "@reduxjs/toolkit";
import { single_product_url } from "../constants/single-product";

const initialState = {
    product: null,
}

const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {
        setSingleProduct: (state, action) => {
            const productId = action.payload;
            state.product = single_product_url.find((product) => product.id === productId);
        },
        clearSingleProduct: (state) => {
            state.product = null;
        }
    }
});

export const { setSingleProduct, clearSingleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;