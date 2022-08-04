import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import '../newsletter/newsletter.css';

const Newsletter = () => {
  return (
    <div className='news-container' >
        <h4 className='title'>NewsLetter</h4>
        <div className='desc'>Get Timely Updates from Your Favourite Products</div>
        <div className='input-container'>
            <input type='text' placeholder='Your Email' style={{border:'none',flex:'8',paddingLeft:'20px'}}></input>
            <button className='button'><SendIcon/> </button>
        </div>
    </div>
  )
}

export default Newsletter