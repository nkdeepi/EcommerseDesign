import React from 'react'
import '../register/login.css'

const login = () => {
  return (
    <div className='logincontainer' >
   <div className='loginwrapper'>
       <h1 className='loginh1'> SIGN IN</h1>
       <fom className='loginform'>
    <input className='logininput' type="text" placeholder='username'></input>
    <input className='logininput' type="text" placeholder='password'></input>
           <button className='loginbutton'>LOGIN</button>
           <a href='' className='loginlink'>Forgot Password?</a>
           <a href='' className='loginlink'> Create New Account</a>
       </fom>
   </div>

    </div>
  )
}

export default login