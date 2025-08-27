import React from 'react';
import theme_pattern from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data';
import arrow_icon from '../assets/arrow_icon.svg';

const MyWork=()=>{

  return( 

    <div id="work" className="flex flex-col items-center justify-center gap-[80px] mx-[80px] my-[170px]">
      <div className="relative">
      <h1 className="px-0 py-[30px] text-[80px] font-semibold">My latest work</h1>
      <img className="absolute bottom-0 right-0 -z-10" src={theme_pattern} alt=""></img>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {mywork_data.map((work,index)=>{
          return <img className="box-border w-[419px] h-[280px] transition-all duration-300 cursor-pointer border-4 rounded-[10px] transition-transform duration-300 hover:scale-110" key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="flex gap-[15px] cursor-pointer border-2 rounded-full px-[25px] py-[20px] text-[22px] font-semibold mb-[80px] transition-all duration-600 hover:gap-[30px] transition-transform duration-600">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />

      </div>
    </div>
   )
}

export default MyWork;