import React from 'react';
import './EventFilter.css';

const EventFilter = ({ filterCategory, setFilterCategory }) => {
  return (
    <div className="event-filter">
      <label htmlFor="category-filter" className="filter-label">
        Filter by Category:
      </label>
      <select
        id="category-filter"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="filter-select"
      >
        <option className='opt' value="">All</option>
        <option className='opt' value="Work">Work</option>
        <option className='opt' value="Personal">Personal</option>
        <option className='opt' value="Others">Others</option>
      </select>
    </div>
  );
};

export default EventFilter;
