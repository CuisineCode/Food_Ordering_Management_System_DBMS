import React, {useContext} from "react";
import ShopContext from './ShopContext'
import Image from "next/image";
import dropdown_icon from '../Assets/dropdown_icon.png'

import Item from './Item'

const ShopCategory = (props) => {
const {all_product} = useContext(ShopContext);
return (
  <div className="">
    <Image src = {props.banner} alt = ""/>
      <div className="">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="">
          Sort by <Image src = {dropdown_icon} alt = ""/>

        </div>
      </div>
      <div className="">
        {all_product.map((item,i) => {
          if(props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          }
          else{
            return null;
          }

        
        })}
      </div>
     </div>


)

}
export default ShopCategory;
