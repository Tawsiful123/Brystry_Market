import React, { Component } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import withRouterParams from '../withRouterParams';

class Product extends Component {
  static contextType = ShopContext;

  render() {
    const { all_product } = this.context;
    const { productId } = this.props.params;
    const product = all_product.find((e) => e.id === Number(productId));

    return (
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
      </div>
    );
  }
}

 export default withRouterParams(Product); 






/* import React, { Component, useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
export class Product extends Component
{
  const {all_product}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  render(){
   return 
    (
      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product}/>
      </div>
    );
  }
}

export default Product;
 */