import React from 'react'
import "./Footer.css"
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const ABCFooter = () => {
  return (
<div className='footerdown'>
      <div className='foter-cont'>
        <div className='footer-data'>
          <h5>Website made by Abhinav Balkrishna Chavare @ {new Date().getFullYear()} all Rights are Reserved</h5>
          <h3>Let's do Inversion's {"<^>"} </h3>
        </div>
        <hr />
        <div className='fot-data-con'>
          <h5>connect me via:</h5>
          <div>
            <a href='https://www.instagram.com/abhi_9chavare/' target="_blank">
              <FaInstagram className='iconsz' /></a>
            <a href='https://www.facebook.com/abhinav.chavare.7/' target="_blank">
              <BsFacebook className='iconsz' /></a>
            <a href='https://www.linkedin.com/in/abhinav-chavare-3a8110112/' target="_blank"
            >
              <AiFillLinkedin className='iconsz' /></a>
          </div>
          <h5 href='https://www.linkedin.com/in/abhinav-chavare-3a8110112/' target="_blank"
          ></h5>
          <h5>
           <span> Phone: +91-9921899345</span> 

          <span>  Email : abhinavchavare07@gmail.com</span>
</h5>
        </div>
      </div>
</div>
  )
}

export default ABCFooter
