import { Routes, Route } from "react-router-dom";

import { PageHome, PageAboutMe, PageUser } from '../../Pages';
import { Footer, Header } from '../index';

import './Main.scss';

export const Main = () => {
  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="user" element={<PageUser/>}/>
          <Route path="about" element={<PageAboutMe/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
};