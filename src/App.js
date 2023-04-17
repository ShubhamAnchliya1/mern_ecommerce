import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import OurStore from './pages/OurStore/OurStore';
import Blog from './pages/Blog/Blog';
import CompareProduct from './pages/CompareProduct/CompareProduct';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about'  element={<About />}    />
            <Route path='/ourstore' element={<OurStore />}  />
            <Route path='/blogs' element={<Blog />}  />
            <Route path='/contact'  element={<Contact />}    />
            <Route path='/compare-product'  element={<CompareProduct />}   />
            <Route path='/wishlist'  element={<Wishlist />}   />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
