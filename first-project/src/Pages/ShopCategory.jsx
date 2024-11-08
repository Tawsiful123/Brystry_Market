import React, { Component, useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';

export class ShopCategory extends Component{

  render(){
    const {all_product} = useContext(ShopContext);
    return(
      <div className="shop-category">
              
      </div>
    );

  }
}

export default ShopCategory;
///dhfjdfhdfhdh