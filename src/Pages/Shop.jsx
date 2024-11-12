import React, {Component} from 'react'
import { Hero } from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';  
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';

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
        <NewCollections/>
        <NewsLetter/>
      </div>
    );
  }
}

export default Shop;