import { BrowserRouter } from 'react-router-dom';

import { Pagination, Search, Table } from '../index';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Table/>
        <Pagination />
      </BrowserRouter>
    </div>
  );
};
