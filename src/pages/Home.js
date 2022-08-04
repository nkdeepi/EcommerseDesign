import React from 'react'
import Categories from '../components/Categories';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/newsletter/Newsletter';
import Products from '../components/product/Products';
import Slider from '../components/slider/Slider';
import Announcement from './Announcement';
import Announcementcat from './Announcementcat';
import Announcementpi from './Announcementpi';

const Home = () => {
  return (
    <div>
      <Announcement/>
        <Navbar/>
        <Slider/>
        <Announcementcat/>
        <Categories/>
        <Announcementpi/>
        <Products/>
        <Newsletter/>
        <Footer/>
        
    </div>
  )
}

export default Home;