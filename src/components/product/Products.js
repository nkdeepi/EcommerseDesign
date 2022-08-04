import React from 'react'
import { productitems } from '../../pages/data';
import Product from './Product';


const Products = () => {
  return (
      
    <div className='products-container'>
        {productitems.map(items=>(
            <Product items={items} key={items.id}/>
        ))}



        
      
    </div>
    
  )
}

export default Products;