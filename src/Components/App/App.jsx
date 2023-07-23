import { Routes, Route } from 'react-router-dom';

import { Home, Posts, NotFound } from '../../Pages';

import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/:id" element={<Posts/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
