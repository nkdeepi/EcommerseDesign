import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "../product/product.css";


const Product = ({items}) => {
  return (
    <div className='product-container'>
        <div className='circle'></div>
        <img src={items.img} className='product-img'></img>
        <div className='product-info'>
            <div className='product-cart'><ShoppingCartOutlinedIcon/></div>
            <div className='product-cart'> <SearchOutlinedIcon/></div>
            <div className='product-cart'><FavoriteBorderOutlinedIcon/></div>
        </div>

        

    </div>
  )
}

export default Product;