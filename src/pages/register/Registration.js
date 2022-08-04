import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Announcement from '../Announcement'
import '../register/register.css'

const Registration = () => {
  return (
    <>
      <div className='regcontainer' style={{ backgroundColor:"lightgray"}}>

        <div className='regwrapper'>
            <h1> <center>Create An Account</center></h1>
            <form className='regform'>
                <input className='reginput' type='text' placeholder="name" ></input>
                <input className='reginput' type='text' placeholder="lastname" ></input>
                <input className='reginput' type='text' placeholder="username" ></input>
                <input className='reginput' type='text' placeholder="email" ></input>
                <input className='reginput' type='text' placeholder="password" ></input>
                <input className='reginput' type='text' placeholder="confirm password" ></input>
                <span className='regspan'> By Creating an account ,I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b></span>
           <button className='regbutton'> Create</button>
            </form>
        </div>
    </div>
    
    </>
    
  )
}

export default Registration