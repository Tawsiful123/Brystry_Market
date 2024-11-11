import React, {Component} from 'react'
import { Hero } from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'

/* export const Shop = () => {
  return (
    <div>Shop</div>
  )
} */

export class Shop extends Component{
  render(){
    return (
      <div>
        <Hero/>
        <Popular/>
        <Offers/>
      </div>
    );
  }
}

export default Shop;
