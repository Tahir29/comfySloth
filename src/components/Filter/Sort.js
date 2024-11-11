import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy } from '../../features/FilterSlice';
import { IoGrid, IoMenu, IoFilter } from "react-icons/io5";
import './Filter.scss';

const Sort = ({ productCount, onViewChange, viewMode, showFilter, toggleFilter, hideFilter }) => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.filter);

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  }

  return (
    <div className='filter--sort'>
      <div className="filter--sort-view">
          <div className={`view-icon ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => onViewChange('grid')}><IoGrid /></div>
          <div className={`view-icon ${viewMode === 'list' ? 'active' : ''}`} onClick={() => onViewChange('list')}><IoMenu /></div>
      </div>
      <p className='filter--sort-productCount'><span>{productCount}</span> products found</p>
      <hr />
      <form className='filter--sort-form'>
        <label htmlFor="sort">Sort by</label>
        <select value={sortBy} onChange={handleSortChange} name="sort" id="sort" className="sort-input">
          <option value="default" selected>Default</option>
          <option value="priceHighToLow">price (highest)</option>
          <option value="priceLowToHigh">price (lowest)</option>
          <option value="nameAZ">name (a-z)</option>
          <option value="nameZA">name (z-a)</option>
        </select>
      </form>
      <div className='filter--sort-main' onClick={toggleFilter}><IoFilter /></div>
    </div>
  )
}

export default Sort
