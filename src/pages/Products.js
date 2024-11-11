import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/ProductsSlice';
import { Breadcrumb, Card, Filter, Sort } from '../components';

const Products = () => {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const { products } = useSelector((state) => state.products);
  const { sortBy, searchQuery, category, company, priceRange, color, freeShipping } = useSelector((state) => state.filter);

  const toggleFilter = () => setShowFilter((prev) => !prev);
  const hideFilter = () => setShowFilter(false);

  // Check screen width to apply conditional filter modal toggle
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 991) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on screen width

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !category || product.category === category;
    const matchesCompany = !company || product.company === company;
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesColor = !color || product.color === color;
    const matchesShipping = !freeShipping || product.shipping;

    // console.log({
    //   name: product.name,
    //   matchesSearch,
    //   matchesCategory,
    //   matchesCompany,
    //   matchesPriceRange,
    //   matchesColor,
    //   matchesShipping,
    // });

    return matchesSearch && matchesCategory && matchesCompany && matchesPriceRange && matchesColor && matchesShipping;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case 'priceHighToLow':
        return b.price - a.price;
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'nameAZ':
        return a.name.localeCompare(b.name);
      case 'nameZA':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Calculate the count of filtered products
  const productCount = filteredProducts.length;

  const handleViewChange = (mode) => {
    setViewMode(mode);
  }

  return (
    <main className='page-bleeding'>
      <Breadcrumb title='Products' />
      <div className='page--divider'>
        <div className='page--divider-left'>
          {showFilter && <Filter hideFilter={hideFilter} /> }
        </div>
        <div className='page--divider-right'>
          <Sort productCount={productCount} onViewChange={handleViewChange} viewMode={viewMode} toggleFilter={toggleFilter} 
        hideFilter={hideFilter}  />
          {/* onSortChange={(sortOption) => dispatch(setSortBy(sortOption))} `onSortChange` is now handled in Sort directly */}
          <Card products={filteredProducts} viewMode={viewMode} />
        </div>
      </div>
    </main>
  )
}

export default Products
