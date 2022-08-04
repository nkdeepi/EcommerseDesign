import React from 'react'
import { categories } from '../pages/data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
      <div>
          
<div className='category-container' style={{display:"flex",padding:'20px',justifyContent:'space-between'}}>
        {categories.map(items=>(
          <CategoryItem items={items} key={items.id}/>  
        ))}
       
    </div>
      </div>
    
  )
}

export default Categories