import React, { Component } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    const { id, image, name, new_price, old_price } = this.props;

    return (
      <div className='item'>
        <Link to={`/product/${id}`}><img src={image} alt="" /></Link>
        <p>{name}</p>
        <div className="item_prices"></div>
        <div className="item-price-new">
          ${new_price}
        </div>
        <div className="item-price-old">
          ${old_price}
        </div>
      </div>
    );
  }
}

export default Item;

