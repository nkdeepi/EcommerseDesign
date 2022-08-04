import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar'
import Announcement from '../Announcement'
import '../cart/cart.css'

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
  return (
    <div className='cartcontainer'>
        <Navbar/>
        <Announcement/>
        <div className='cartwrapper'>
            <h1 className='carth1'>YOUR BAG</h1>
            <div className='carttop'>
                <button className='cartbt1'>CONTINUE SHOPPING</button>
                <div className='carttoptext'>
                    <span className='carttoptextspan'>Shopping Bag(2)</span>
                    <span className='carttoptextspan'> Your Wishlist(0)</span>
                </div>
                <button className='cartbt2'>CHECKOUT NOW</button>
            </div>
            <div className='cartbottom'>
                <div className='cartinfo'>
                    <div className='cartproduct'>
                        <div className='cartproductdetails'>
                           
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1BJdGaSjeeUGVLLoeeqXNbw1ZrMMLRqhExw&usqp=CAU"  height="200px" width="200px"></img>
                        <div className='cartdetails'>
                            <span className='cartpdname'> <b>Product:</b>Asian Mens wonder-13 Sports Shoe</span>
                            <span className='cartpdid'> <b>ID:</b> 0987542</span>
                            <div className='cartproductcolor'></div>
                            <span className='cartpdsize'> 37.5</span>
                            

                        </div>
                        
                        
                        </div>


                        <div className='cartpricedetails'>
                            <div className='cartproductamountcontainer'>
                                <AddIcon/>
                            </div>
                            <div className='cartproductamount'>2</div>
                            <RemoveIcon/>

                        <div className='cartproductprice'><b>Price:</b>1899/-</div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='cartproduct'>
                        <div className='cartproductdetails'>
                           
                            <img src="https://images-eu.ssl-images-amazon.com/images/I/619SqQW1NYL._AC._SR360,460.jpg" height="200px" width="200px"></img>
                        <div className='cartdetails'>
                            <span className='cartpdname'> <b>Product:</b> Mens wonder-13 Causual T-Shirt</span>
                            <span className='cartpdid'> <b>ID:</b> 0934980</span>
                            <div className='cartproductcolor'></div>
                            <span className='cartpdsize'>XL</span>
                            

                        </div>
                        
                        
                        </div>


                        <div className='cartpricedetails'>
                            <div className='cartproductamountcontainer'>
                                <AddIcon/>
                            </div>
                            <div className='cartproductamount'>1</div>
                            <RemoveIcon/>

                        <div className='cartproductprice'><b>Price:</b>439/-</div>
                        </div>
                    </div>
                </div>
                <div className='cartsummary'>
                    <h4 className='cartsummarytitle'>ORDER SUMMARY</h4>
                    <div className='cartsummaryitem'>
                        <span className='summaryitemtext'> Total</span>
                        <span className='summaryitemprice'>80</span>
                    </div>
                    <button className='cartbtn3'>CHECKOUT NOW</button>
                </div>
            </div>

        </div>
        <Footer/>

    </div>
  )
}

export default Cart