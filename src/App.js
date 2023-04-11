import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/about'  element={<About />}    />
            <Route path='/contact'  element={<Contact />}    />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
