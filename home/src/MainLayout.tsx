import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BIDU from 'bidu/biduContent';
import STDIO from 'stdio/stdioContent';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const MainLayout = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Router>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/bidu' element={<BIDU/>}>
        </Route>
        <Route path='/stdio' element={<STDIO/>}>
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  </div>
);

export default MainLayout;