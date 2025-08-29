import React from 'react';
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'



const Contact=()=>{
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e85ca0d8-32b9-4c32-b299-c2e5d41143b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("email sent successfully")
    } else {
      console.log("Error", data);
      setResult(data.message);
    };
  };
  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-[80px] mx-[80px] my-[170px]">
      <div className="relative">
        <h1 className="px-0 py-[30px] text-[80px] font-semibold">Get in touch</h1>
        <img className="absolute bottom-0 right-0 -z-10" src={theme_pattern} alt="" />
      </div>
      <div className=" flex gap-[150px]">
        <div className="flex flex-col gap-[30px] ">
          <h1 className="text-[80px] min-w-[100px] font-semibold bg-[linear-gradient(90deg,#ff0000,#0000ff)] bg-clip-text text-transparent">Let's talk</h1>
          <p className="max-w-[550px] color-white text-[20px] leading-[25px]">I'm currently open to entry level jobs, so feel free to contact</p>
          <div className="flex flex-col gap-[30px] text-[22px]">
              <div className=" flex items-center gap-[20px]">
                <img src={mail_icon} alt=""/>
                <p>abhisheklohar05@gmail.com</p>
              </div>
              <div>
                <img src={call_icon} alt=""/>
                <p>+918000513473</p>
              </div>
              <div>
                <img src={location_icon} alt=""/>
                <p>Mumbai,India</p>
              </div>
          </div>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col items-start gap-[30px]">
            <label className="text-[22px] font-semibold">Your Name</label>
            <input className="border-none w-[700px] h-[78px] pl-[10px] rounded-sm bg-[#32323c] text-[20px]" type="text" placeholder="Enter your name" name="name"/>
            <label className="text-[22px] font-semibold" htmlFor="">Your Email</label>
            <input className="border-none w-[700px] h-[78px] pl-[10px] rounded-sm bg-[#32323c] text-[20px]"  type="email" placeholder="Enter your email" name="email"/>
            <label className="text-[22px] font-semibold" htmlFor=""> Write your message here</label>
            <textarea className="w-[650px] border-none p-[25px] rounded-sm bg-[#32323c] text-[20px] " name="message" rows="8" placeholder="Enter your message"></textarea>
            <button className="border-none rounded-[50px] bg-[linear-gradient(90deg,#ff0000,#0000ff)] text-[22px] px-[20px] py-[15px] mb-[50px] cursor-pointer transition-transform duration-300 hover:scale-105" type="submit">Submit now </button>


          </form>
      </div>
    </div>
  )
}

export default Contact;