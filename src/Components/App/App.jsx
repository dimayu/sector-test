import { Routes, Route } from 'react-router-dom';

import { Home } from '../../Pages/Home';
import { Posts } from '../../Pages/Posts';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/:id" element={<Posts/>}/>
      </Routes>
    </div>
  );
};
