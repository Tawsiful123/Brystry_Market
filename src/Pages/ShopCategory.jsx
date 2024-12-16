import React, { Component } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

class ShopCategory extends Component {
  static contextType = ShopContext;

  render() {
    const { all_product } = this.context;
    const { category, banner } = this.props;

    if (!all_product || !category) return null; // Early return in case of missing data

    return (
      <div className='shop-category'>
        <img className='shopcategory-banner' src={banner} alt="banner" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12 </span> out of 36 products
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown_icon} alt="dropdown" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            else{
            return null;
            }
          })}
        </div>
        <div className='shopcategory-loadmore'>
          Explore More
        </div>
      </div>
    );
  }
}

export default ShopCategory;
/* import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!all_product || !props.category) return null; // Early return in case of missing data

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          }
          return null;
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
 */