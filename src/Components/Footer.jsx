import React from 'react';
import footer_logo from '../assets/footer_logo.svg'
import user_icon from '../assets/user_icon.svg'
const Footer=()=>{
  return(
    <div className="flex flex-col mx-[50px] my-[170px] gap-[30px]">
      <div className="flex justify-between">
        <div className="text-[20px] max-w-[400px]">
          <h1 className="text-[40px] font-semibold bg-[linear-gradient(90deg,#ff0000,#0000ff)] bg-clip-text text-transparent">Abhishek</h1>
          <p className="text-[20px] max-w-[400px]">I am a full stack developer from, India with experience in personal projects in mern stack</p>
        </div>
        <div className="flex items-center gap-[35px]">
          <div className="flex gap-[30px] px-[10px] py-[20px] rounded-full bg-[#32323B] pr-[80px]">
            <img src={user_icon} alt=""></img>
            <input className="outline-none border-none bg-[#a0a0a0] bg-transparent text-[18px] hover:border-2 " type="email" placeholder="Enter your email"></input>
          </div>
          <div className="text-[20px] px-[20px] py-[17px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] cursor-pointer">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="flex justify-between text-[18px]">
        <p className="">© 2025 Abhishek Lohar. All rights reserved.</p>
        <div className="flex gap-[50px] mb-[50px]">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;