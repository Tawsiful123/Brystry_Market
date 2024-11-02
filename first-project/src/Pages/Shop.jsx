import React, {Component} from 'react'
import { Hero } from '../Components/Hero/Hero';

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
      </div>
    );
  }
}

export default Shop;