import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Cart} from './Pages/Cart';
import Navbar from './Components/Navbar/Navbar';
import {Shop} from './Pages/Shop';
import {Product} from './Pages/Product';
import {LoginSignup} from './Pages/LoginSignup';
import {ShopCategory} from './Pages/ShopCategory';
import {men_banner} from './Components/Assests/banner_mens.png';
import {women_banner} from './Components/Assests/banner_women.png';
import {kid_banner} from './Components/Assests/banner_mens.png';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path="/kids" element={<ShopCategory bannner={kid_banner} category="kids"/>} />
        <Route path="/cart" element={<Product />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<LoginSignup/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*  

     import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" />} />
        <Route path="/womens" element={<ShopCategory category="women" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/