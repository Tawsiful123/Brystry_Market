import React, { Component, useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import {dropdown_icon} from '../Components/Assests/dropdown_icon.png'
import {Item} from '../Components/Item/Item'

export class ShopCategory extends Component{

  render(){
    const {all_product} = useContext(ShopContext);
    return(
      <div className="shop-category">
            <img src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
              <p>
                <span>Showing 1-12</span>out of 36 products
              </p>
              <div className="shopcategory-sort">
                 sort by <img src={dropdown_icon} alt="" />
              </div>
            </div>
            <div className="shopcategory-products">
               {all_product.map((item,i)=>{
                 if(props.category===item.category)
                 {
                    return <Item />
                 }
               })} 
            </div>
      </div>
    );

  }
}

export default ShopCategory;
///dhfjdfhdfhdh