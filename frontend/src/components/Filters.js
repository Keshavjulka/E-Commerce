import React, { useState } from 'react';
import './Filters.css';

const Filters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceFilter,
  onClearFilters,
}) => {
  const [localMinPrice, setLocalMinPrice] = useState(minPrice);
  const [localMaxPrice, setLocalMaxPrice] = useState(maxPrice);

  const handleApplyPrice = () => {
    onPriceFilter(localMinPrice, localMaxPrice);
  };

  const handleClear = () => {
    setLocalMinPrice('');
    setLocalMaxPrice('');
    onClearFilters();
  };

  const priceRanges = [
    { label: 'All Prices', min: '', max: '' },
    { label: 'Under $25', min: '', max: '25' },
    { label: '$25 - $50', min: '25', max: '50' },
    { label: '$50 - $100', min: '50', max: '100' },
    { label: '$100 - $200', min: '100', max: '200' },
    { label: 'Over $200', min: '200', max: '' },
  ];

  const handlePriceRangeClick = (min, max) => {
    setLocalMinPrice(min);
    setLocalMaxPrice(max);
    onPriceFilter(min, max);
  };

  return (
    <aside className="filters">
      <div className="filters-header">
        <h2>Filters</h2>
        {(selectedCategory !== 'all' || minPrice || maxPrice) && (
          <button className="clear-all-btn" onClick={handleClear}>
            Clear All
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="filter-section">
        <h3 className="filter-title">
          <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Category
        </h3>
        <div className="filter-options">
          <label className="filter-option">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(e) => onCategoryChange(e.target.value)}
            />
            <span className="option-label">All Categories</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="filter-option">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
              />
              <span className="option-label">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <h3 className="filter-title">
          <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Price Range
        </h3>

        <div className="price-ranges">
          {priceRanges.map((range, index) => (
            <button
              key={index}
              className={`price-range-btn ${
                localMinPrice === range.min && localMaxPrice === range.max ? 'active' : ''
              }`}
              onClick={() => handlePriceRangeClick(range.min, range.max)}
            >
              {range.label}
            </button>
          ))}
        </div>

        <div className="custom-price">
          <label className="price-label">Custom Range</label>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min"
              value={localMinPrice}
              onChange={(e) => setLocalMinPrice(e.target.value)}
              className="price-input"
              min="0"
            />
            <span className="price-separator">-</span>
            <input
              type="number"
              placeholder="Max"
              value={localMaxPrice}
              onChange={(e) => setLocalMaxPrice(e.target.value)}
              className="price-input"
              min="0"
            />
          </div>
          <button className="apply-price-btn" onClick={handleApplyPrice}>
            Apply
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
