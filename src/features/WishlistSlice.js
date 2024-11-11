import { createSlice } from '@reduxjs/toolkit';

const loadWishlistFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
};

const saveWishlistToLocalStorage = (wishlist) => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
};

const initialState = {
  items: loadWishlistFromLocalStorage(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
      saveWishlistToLocalStorage(state.items);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      saveWishlistToLocalStorage(state.items);
    },
    toggleWishlist: (state, action) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
      saveWishlistToLocalStorage(state.items);
    }
  }
});

export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
