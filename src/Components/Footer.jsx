import React from 'react';
import footer_logo from '../assets/footer_logo.svg'
import user_icon from '../assets/user_icon.svg'

const Footer=()=>{
  return(
    <div className="flex flex-col mx-[50px] md:mx-[50px] mx-[20px] my-[170px] md:my-[170px] my-[80px] gap-[30px] md:gap-[30px] gap-[20px]">
      <div className="flex md:flex-row flex-col justify-between md:items-start items-center gap-[30px] md:gap-0">
        <div className="text-[20px] max-w-[400px] text-center md:text-left">
          <h1 className="text-[40px] md:text-[40px] text-[32px] font-semibold bg-[linear-gradient(90deg,#ff0000,#0000ff)] bg-clip-text text-transparent">Abhishek</h1>
          <p className="text-[20px] md:text-[20px] text-[16px] max-w-[400px]">I am a full stack developer from, India with experience in personal projects in mern stack</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[35px] md:gap-[35px] gap-[20px] w-full md:w-auto">
          <div className="flex gap-[30px] md:gap-[30px] gap-[15px] px-[10px] py-[20px] rounded-full bg-[#32323B] pr-[80px] md:pr-[80px] pr-[20px] w-full md:w-auto">
            <img src={user_icon} alt=""></img>
            <input className="outline-none border-none bg-[#a0a0a0] bg-transparent text-[18px] md:text-[18px] text-[14px] hover:border-2 w-full" type="email" placeholder="Enter your email"></input>
          </div>
          <div className="text-[20px] md:text-[20px] text-[16px] px-[20px] py-[17px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] cursor-pointer whitespace-nowrap">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="flex md:flex-row flex-col justify-between md:items-center items-center text-[18px] md:text-[18px] text-[14px] gap-[20px] md:gap-0">
        <p className="text-center md:text-left">© 2025 Abhishek Lohar. All rights reserved.</p>
        <div className="flex md:flex-row flex-col gap-[50px] md:gap-[50px] gap-[15px] mb-[50px] md:mb-[50px] mb-[0px] text-center">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;