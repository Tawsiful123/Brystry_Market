import React, { useState }  from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  return (
   
    <div className='navbar'>
    <div className="nav-logo">
     <img src={logo} alt="" />
     <p>SHOPPER</p>
     </div>
     <ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
      <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<h/>:<></>}</li>
      <li onClick={()=>{setMenu("women")}}><Link to='/women'>Women</Link>{menu==="women"?<h/>:<></>}</li>
      <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<h/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link>
       <Link to=' /cart'></Link><img src={cart_icon} alt="" />
        
  </div>
   </div>

  )
}

export default Navbar
