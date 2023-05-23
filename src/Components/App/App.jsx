import { BrowserRouter } from 'react-router-dom';

import { Main } from '../../Components/index';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
};
