import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setCategory, setCompany, setPriceRange, setColor, setFreeShipping, clearFilters, } from '../../features/FilterSlice';

const Filter = ({ hideFilter }) => {
  const dispatch = useDispatch();
  const { searchQuery, category, company, priceRange, color, freeShipping } = useSelector((state) => state.filter);

  return (
    <div className='filter'>
      <div className='filter-container'>
        <div className='filter--group'>
          <input
            className='filter--group-input'
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
        <div className='filter--group'>
          <label className='filter--group-title'>Categories</label>
          <select className='filter--group-select' value={category} onChange={(e) => dispatch(setCategory(e.target.value))}>
            <option value="">All Categories</option>
            <option value="office">Office</option>
            <option value="living room">Living Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="bedroom">Bedroom</option>
            {/* Add options for categories */}
          </select>
        </div>
        <div className='filter--group'>
          <label className='filter--group-title'>Companies</label>
          <select className='filter--group-select' value={company} onChange={(e) => dispatch(setCompany(e.target.value))}>
            <option value="">All Companies</option>
            <option value="marcos">Marcos</option>
            <option value="liddy">Liddy</option>
            <option value="ikea">Ikea</option>
            <option value="caressa">Caressa</option>
            {/* Add options for companies */}
          </select>
        </div>
        <div className='filter--group'>
          <label className='filter--group-title'>Price</label>
            <input
              className='filter--group-price'
              type="range"
              min="0"
              max="1000000"
              value={priceRange[1]}
              onChange={(e) => dispatch(setPriceRange([0, Number(e.target.value)]))}
          />
        </div>
        {/* <select value={color} onChange={(e) => dispatch(setColor(e.target.value))}>
          <option value="">All Colors</option>
        </select> */}
        <div className='filter--group'>
          <label>
            <input
              type="checkbox"
              checked={freeShipping}
              onChange={(e) => dispatch(setFreeShipping(e.target.checked))}
              style={{marginRight: '10px', cursor: 'pointer'}}
            />
            Free Shipping
          </label>
        </div>
        
        <div className='filter--buttons'>
          <button className='base_btn btn_sm primary_btn filter-clear' onClick={() => dispatch(clearFilters())}>Clear Filters</button>
          <div className='base_btn btn_sm primary_btn filter-close' onClick={hideFilter}>Close</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
