import React from 'react';

const Item = (props) => {
 return(
  <div className='w-350 transform hover:scale-105 transition duration-600'>
     <img src = {props.image} alt = ""/>
     <p className='mt-6 mb-6 ml-0 mr-0'>{props.name}</p>
     <div className='flex gap-5'>
      <div className='text-[#374151] text-xl font-semibold'>
             {props.new_price}
      </div>
      <div className='text-[#8c8c8c] text-xl font-medium line-through'>
            {props.old_price}
      </div>
     </div>

  </div>

 );

} 





export default Item;
