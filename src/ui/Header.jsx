import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from '../features/filter/filterSlice';

function Header() {
  const dispatch = useDispatch();

  const filterWord = useSelector((state) => state.filter.filterTerm);

  const handleAll = () => {
    dispatch(setFilterTerm('all'));
  };

  const handleFeatured = () => {
    dispatch(setFilterTerm('featured'));
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${
            filterWord === 'all' || filterWord === '' ? 'active-filter' : ''
          }`}
          onClick={handleAll}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            filterWord === 'featured' ? 'active-filter' : ''
          }`}
          onClick={handleFeatured}
        >
          Featured
        </button>
      </div>
    </div>
  );
}

export default Header;
