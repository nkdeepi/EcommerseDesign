import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Products from '../../components/product/Products'
import Announcement from '../Announcement'
import '../produclist/productlist.css'


const ProductList = () => {
  return (
    <div className='productlist-container'>
        <Navbar/>
        <Announcement/>
        <h3 className='productlisth3'>Dresses</h3>
        <div className='filtercontainer'>
            <div className='filter'><span className='filtertext'>Filter Products:</span>

            <select style={{padding:'10',marginRight:'10px'
    
            }}>
                <option disabled selected>
                    color
                </option>
                <option>White</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Black</option>
            </select>
            <select>
                <option disabled selected>
                    Size
                </option>
                <option>Xs</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            </div>
            <div className='filter'><span className='filtertext'>Sort Products:</span>

            <select>
                <option selected>Newest</option>
                <option>Price(low to High)</option>
                <option>Price(High to Low)</option>
            </select>
            </div>
        </div>
        <Products/>
        <Newsletter/>
        <Footer/>

    </div>
  )
}

export default ProductList