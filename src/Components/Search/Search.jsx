import React, { useState } from 'react';

import './Search.scss';

export const Search = (props) => {
  const {
    searchPosts
  } = props;
  
  const [search, setSearch] = useState('');
  
  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchPosts(search);
      setSearch('');
    }
  };
  
  return (
    <div className="wrapper">
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Поиск"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="search__btn"
          onClick={() => searchPosts(search, setSearch(''))}
        >
          Search
        </button>
      </div>
    </div>
  );
};
