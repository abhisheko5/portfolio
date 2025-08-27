import React, { useState } from 'react';
import underline from '../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <div className="flex items-center justify-between mx-4 md:mx-20 my-2 relative">
      {/* Logo */}
    <h1 className="text-[40px] font-semibold bg-[linear-gradient(90deg,#ff0000,#0000ff)] bg-clip-text text-transparent">Abhishek</h1>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <img 
          src={mobileMenuOpen ? menu_close : menu_open} 
          alt="Menu" 
          className="w-6 h-6 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-12 text-lg list-none">
        <li className="flex flex-col gap-1 cursor-pointer">
          <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img className="mx-auto" src={underline} alt="" /> : null}
        </li>
        <li className="flex flex-col gap-1 cursor-pointer">
          <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img className="mx-auto" src={underline} alt="" /> : null}
        </li>
        <li className="flex flex-col gap-1 cursor-pointer">
          <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img className="mx-auto" src={underline} alt="" /> : null}
        </li>
        <li className="flex flex-col gap-1 cursor-pointer">
          <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img className="mx-auto" src={underline} alt="" /> : null}
        </li>
      </ul>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex w-48 h-12 items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 text-white text-lg font-bold transition-transform duration-300 transform hover:scale-110">
        <AnchorLink className="text-white" offset={50} href="#contact">
          <span onClick={() => setMenu("contact")}>Connect with me</span>
        </AnchorLink>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-72 bg-black shadow-lg transform transition-transform duration-300 z-40 ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col pt-20 px-8">
          <ul className="flex flex-col gap-8 text-xl list-none">
            <li className="flex flex-col gap-2 cursor-pointer">
              <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#home">
                <p onClick={() => handleMenuClick("home")}>Home</p>
              </AnchorLink>
              {menu === "home" ? <img className="mx-auto w-16" src={underline} alt="" /> : null}
            </li>
            <li className="flex flex-col gap-2 cursor-pointer">
              <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#about">
                <p onClick={() => handleMenuClick("about")}>About Me</p>
              </AnchorLink>
              {menu === "about" ? <img className="mx-auto w-16" src={underline} alt="" /> : null}
            </li>
            <li className="flex flex-col gap-2 cursor-pointer">
              <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#work">
                <p onClick={() => handleMenuClick("work")}>Portfolio</p>
              </AnchorLink>
              {menu === "work" ? <img className="mx-auto w-16" src={underline} alt="" /> : null}
            </li>
            <li className="flex flex-col gap-2 cursor-pointer">
              <AnchorLink className="hover:text-blue-600 transition-colors" offset={50} href="#contact">
                <p onClick={() => handleMenuClick("contact")}>Contact</p>
              </AnchorLink>
              {menu === "contact" ? <img className="mx-auto w-16" src={underline} alt="" /> : null}
            </li>
          </ul>
          
          {/* Mobile CTA Button */}
          <div className="w-full h-12 flex items-center justify-center rounded-full cursor-pointer bg-gradient-to-r from-red-500 to-blue-500 text-white text-lg font-bold mt-8 transition-transform duration-300 transform hover:scale-105">
            <AnchorLink className="text-white" offset={50} href="#contact">
              <span onClick={() => handleMenuClick("contact")}>Connect with me</span>
            </AnchorLink>
          </div>
        </div>
      </div>


      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;