import React, { Component } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'shop',
      cartCount: 0
    };
  }

  setMenu = (menu) => {
    this.setState({ menu });
  };

  render() {
    const { menu, cartCount } = this.state;

    const menuItems = [
      { name: 'Shop', path: '/' },
      { name: 'Men', path: '/mens' },
      { name: 'Women', path: '/womens' },
      { name: 'Kids', path: '/kids' },
    ];

    return (
      <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>BRYSTRY MARKET</p>
        </div>

        <ul className='nav-menu'>
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => this.setMenu(item.name.toLowerCase())}
              className={menu === item.name.toLowerCase() ? 'active' : ''}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className='nav-login-cart'>
          <Link to='/Login' aria-label="Login">
            <button>Login</button>
          </Link>
          <Link to="/cart" aria-label="Go to Cart">
            <img src={cart_icon} alt="Cart Icon showing item count" />
          </Link>
          {cartCount > 0 && <div className='nav-cart-count'>{cartCount}</div>}
        </div>
      </div>
    );
  }
}

export default Navbar;
 
/* import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
  const [menu,setMenu]= useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div> 
      <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>} </li>  
      <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li> 
      <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li> 
      <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li> 
      </ul> 
      <div className="nav-log-cart">
      <button>Login</button>
      <img src={cart_icon} alt="" />
      <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar */