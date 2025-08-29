import React from "react";
import profile_img from '../assets/profile_img.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero=()=>{
  return(
    <div id="home" className="flex flex-col items-center gap-[20px] md:gap-[35px]">
      <img className="mt-[80px] md:mt-[150px] w-[200px] md:w-100 rounded-full" src={profile_img} alt=""/>
      <h1 className="text-center w-[100%] text-[40px] sm:text-[50px] md:text-[90px] font-semibold px-4 md:px-0">
      <span className="text-[36px] sm:text-[45px] md:text-[80px] font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500
           shadow-xl bg-clip-text text-transparent">I'm Abhishek Lohar</span> , Backend developer based in india</h1>
      <p className="w-[90%] md:w-[50%] text-center font-md px-4 md:px-0">I am a recent graduate in btech cs had expericence with personal project in full stack</p>
      <div className="flex flex-col md:flex-row items-center gap-[15px] md:gap-[25px] text-lg md:text-xl font-semibold mb-[50px] px-4 md:px-0">
        <div className="px-[15px] py-[15px] bg-[linear-gradient(90deg,#ff0000,#0000ff)] cursor-pointer rounded-full hover:border border-white"><AnchorLink className="" offset={50} href="#contact">Connect with me</AnchorLink></div>
       <a
  href="https://drive.google.com/file/d/1hV7FgzQL64E4HKXSX3ZWIBguuoaiYhRi/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="px-[35px] py-[15px] rounded-full cursor-pointer border border-white hover:border-blue-500 inline-block"
>
  My Resume
</a>
      </div>

    </div>
  )
}
export default Hero;