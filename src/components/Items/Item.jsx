// Item.tsx
import React from 'react';

interface ItemProps {
  image: string;
  name: string;
  new_price: number;
  old_price: number;
}

const Item: React.FC<ItemProps> = ({ image, name, new_price, old_price }) => {
  return (
    <div className='item w-350'>
      <img src={image} alt="" />
      <p style={{ margin: '6px 0px' }}>{name}</p>
      <div className='item-prices flex gap-5'>
        <div className='item-price-new text-[#374151] text-xl font-semibold '>
          ${new_price}
        </div>
        <div className='item-price-old text-[#8c8c8c] text-xl font-semibold'>
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
