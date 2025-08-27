import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/profile_img.jpeg";

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center justify-center gap-[80px] mx-[80px] my-[170px]">
      <div className="relative  inline-block">
        {/* Background image */}
        <img
          className="absolute -bottom-2 left-0 w-full h-4 -z-10"
          src={theme_pattern}
          alt=""
        />

        {/* Heading on top of image */}
        <h1 className="text-4xl font-bold text-white relative z-10">
          About me
        </h1>
      </div>

      <div className="flex gap-[80px]">
        <div className="">
          <img src={profile_img} alt="" />
        </div>
        <div className="flex flex-col gap-[80px]">
          <div className="flex flex-col gap-[20px] text-[24px] font-semibold">
            <p>
              I am a passionate backend developer, skilled in building efficient
              and scalable server-side applications, eager to contribute to
              real-world projects and grow in a collaborative environment.
            </p>
            <p>
              {" "}
              Eager to contribute to real-world projects, learn from a
              collaborative environment, and deliver efficient server-side
              solutions.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className=" flex gap-[50px] items-center transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-semibold">
                HTML & CSS
              </p>
              <hr
                className="outline-none border-none w-[50%] h-[8px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] "
                style={{ width: "70%" }}
              ></hr>
            </div>
            <div className=" flex gap-[50px] items-center transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-semibold">
                React js
              </p>
              <hr
                className="outline-none border-none w-[50%] h-[8px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] "
                style={{ width: "60%" }}
              ></hr>
            </div>
            <div className=" flex gap-[50px] items-center transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-semibold">
                Javascript
              </p>
              <hr
                className="outline-none border-none w-[50%] h-[8px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] "
                style={{ width: "50%" }}
              ></hr>
            </div>
            <div className=" flex gap-[50px] items-center transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-semibold">Sql</p>
              <hr
                className="outline-none border-none w-[50%] h-[8px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] "
                style={{ width: "40%" }}
              ></hr>
            </div>
            <div className=" flex gap-[50px] items-center transition-transform duration-300 hover:scale-105">
              <p className="min-w-[150px] text-[24px] font-semibold">Python</p>
              <hr
                className="outline-none border-none w-[50%] h-[8px] rounded-full bg-[linear-gradient(90deg,#ff0000,#0000ff)] "
                style={{ width: "50%" }}
              ></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  w-[100%] justify-around mb-[80px]">
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-112">
          <h1 class="text-[60px] font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            10+
          </h1>

          <p>years of experience</p>
        </div>
        <hr />
        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-112">
          <h1 class="text-[60px] font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            90+
          </h1>
          <p>Projects completed</p>
        </div>
        <hr />

        <div className="flex flex-col items-center gap-[10px] transition-transform duration-500 hover:scale-112">
          <h1 class="text-[60px] font-semibold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            15+
          </h1>
          <p>Happy Clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
