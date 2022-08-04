import React from 'react'
import '../footer/footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='foot-container'>
        <div className='foot-left'>
            <div>
                <center><h3>MOONGODDESS</h3></center>
                
                <p className='description'>Moongoddess Couture is a leading International clothing brand founded by Anitha who is a leading fashion designer and woman entrepreneur from Kochi and Akhil Jeevan who is the talented co-founder and CEO. Though the brand was established in 2018, Moongoddess achieved the top most position in South India and stepping to an International brand. Our team strongly believes that every tiny things that you passionately planned for the special moments should be covered in a magical way to be cherished forever.</p>
                <div className='socialiconContainer'>
                    <h1 className='sicon'><FacebookOutlinedIcon/></h1>
                    <h1 className='sicon'><TwitterIcon/></h1>
                    <h1 className='sicon'><InstagramIcon/></h1>
                    <h1 className='sicon'><PinterestIcon/></h1>
                </div>

            </div>
        </div>
        <div className='foot-center'>
            <h3 style={{marginBottom:'30px'}}>Useful Links</h3>
            <ul className='foot-list'>
               <li className='foot-listitem'>Home</li>
               <li className='foot-listitem'>About Us</li>
               <li className='foot-listitem'>Cart</li>
               <li className='foot-listitem'>Men Fashion</li>
               <li className='foot-listitem'>Woman Fashion</li>
               <li className='foot-listitem'>Kids Fashion</li>
               <li className='foot-listitem'>My Account</li>
               <li className='foot-listitem'>WishList</li>
               <li className='foot-listitem'>Terms And Conditions</li>
               
            </ul>
        </div>
        <div className='foot-right'>
            <h3>Contact Us</h3>
            <p><LocationOnIcon/>MoonGoddess Couture

K.C Abraham Master Road

12th Cross Rd, Panampilly Nagar

Kochi, Kerala 682036</p>
            <h5  style={{display:'flex',marginLeft:'10px'}}><PhoneIcon/>0484 3564787</h5>
            <h5 style={{display:'flex',marginLeft:'10px'}}><EmailIcon/>moongoddess@gmail.com</h5>
            <img></img>
        </div>
    </div>
  )
}

export default Footer