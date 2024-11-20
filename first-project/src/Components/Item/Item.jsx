import React, { Component } from 'react';
import './Item.css';
class Item extends Component {
  render() {
    const { image, name, new_price, old_price } = this.props;

    return (
      <div className='item'>
        <img src={image} alt="" />
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
