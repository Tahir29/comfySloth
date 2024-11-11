import { createSlice } from "@reduxjs/toolkit";

const loadFiltersFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('filters')) || {
    sortBy: 'default',
    searchQuery: '',
    category: '',
    company: '',
    priceRange: [0, 1000000],
    color: '',
    freeShipping: false,
  };
};

const saveFiltersToLocalStorage = (filters) => {
  localStorage.setItem('filters', JSON.stringify(filters));
};

const initialState = {
  sortBy: 'default',
  searchQuery: '',
  category: '',
  company: '',
  priceRange: [0, 1000000], // or the max possible price for your dataset
  color: '',
  freeShipping: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      saveFiltersToLocalStorage(state);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      saveFiltersToLocalStorage(state);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      saveFiltersToLocalStorage(state);
    },
    setCompany: (state, action) => {
      state.company = action.payload;
      saveFiltersToLocalStorage(state);
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
      saveFiltersToLocalStorage(state);
    },
    setColor: (state, action) => {
      state.color = action.payload;
      saveFiltersToLocalStorage(state);
    },
    setFreeShipping: (state, action) => {
      state.freeShipping = action.payload;
      saveFiltersToLocalStorage(state);
    },
    clearFilters: (state) => {
      state.sortBy = 'default';
      state.searchQuery = '';
      state.category = '';
      state.company = '';
      state.priceRange = [0, 10000000];
      state.color = '';
      state.freeShipping = false;
      saveFiltersToLocalStorage(state);
    },
  },
});

export const {
  setSortBy,
  setSearchQuery,
  setCategory,
  setCompany,
  setPriceRange,
  setColor,
  setFreeShipping,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
