import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Pagination, Search, Table } from '../index';

import './App.scss';

export const App = () => {
  const { amountPosts, page } = useSelector(state => state.posts);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Table/>
        <Pagination
          totalPosts={amountPosts}
          currentPage={page}
          postsPerPage={10}
        />
      </BrowserRouter>
    </div>
  );
};
