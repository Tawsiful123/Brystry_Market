import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>BRYSTRY MARKET</p>
      </div>

        <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")} className={menu === "shop" ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
        </li>
        <li onClick={() => setMenu("mens")} className={menu === "mens" ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>
        </li>
        <li onClick={() => setMenu("womens")} className={menu === "womens" ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}}to='/womens'>Women</Link>
        </li>
        <li onClick={() => setMenu("kids")} className={menu === "kids" ? 'active' : ''}>
          <Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link>
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link> 
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
/* help from chatgpt
   import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>BRYSTRY MARKET</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")} className={menu === "shop" ? 'active' : ''}>
          <Link to='/'>Shop</Link>
        </li>
        <li onClick={() => setMenu("mens")} className={menu === "mens" ? 'active' : ''}>
          <Link to='/mens'>Men</Link>
        </li>
        <li onClick={() => setMenu("womens")} className={menu === "womens" ? 'active' : ''}>
          <Link to='/womens'>Women</Link>
        </li>
        <li onClick={() => setMenu("kids")} className={menu === "kids" ? 'active' : ''}>
          <Link to='/kids'>Kids</Link>
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link> 
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
*/


/* previous code
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>BRYSTRY MARKET</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link to='/'>Shop</Link>{menu === "shop" ? <h /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link to='/mens'>Men</Link>{menu === "mens" ? <h /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link to='/womens'>Women</Link>{menu === "womens" ? <h /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link to='/kids'>Kids</Link>{menu === "kids" ? <h /> : <></>}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link> 
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};*/