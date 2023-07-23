import React, { useState, useEffect } from 'react';

import './Search.scss';

export const Search = ({ value }) => {
  const [valueSearch, setValueSearch] = useState('');
  
  useEffect(() => {
    value(valueSearch);
  }, [valueSearch]);
  
  return (
    <div className="wrapper">
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Поиск"
          name="search"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
        />
        <button
          className="search__btn"
        >
        </button>
      </div>
    </div>
  );
};
