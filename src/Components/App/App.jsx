import { BrowserRouter } from 'react-router-dom';

import { Search } from '../index';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
      </BrowserRouter>
    </div>
  );
};
