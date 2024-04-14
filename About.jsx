import React from "react";
import mypic from "../assets/mypic.jpg";
import Typewriter from "typewriter-effect";

function About(props) {
  console.log(props.isImage);
  return (
    <>
      <div
        id="about"
        className={` bg-[#120029] py-[120px]  px-[100px] flex  items-center ${
          props.isImage ? "justify-between" : "justify-center"
        }`}
      >
        {" "}
        {/* <!--Start Background Animation Body--> */}
        <div class="area" className="">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* <!--End Background Animation Body--> */}
        <div className="z-[5] max-w-[1300px] mx-auto w-[88%]">
          <div>
            <h1 className="text-xl cursor-pointer lg:text-6xl font-bold pb-2 text-[#F2F3F4]">
              Hi, I am <br />
              Nivethini Selvaraj
            </h1>
            <h1 className="text-2xl lg:text-4xl pb-6 text-[#F2F3F4] ">
              <span className="text-[#c026d3] font-semibold">
                <Typewriter
                  options={{
                    strings: ["Front End Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p
              className={` text-xl font-medium text-[#b1b2b3] ${
                props.isImage ? "w-3/5" : " "
              }`}
            >
              Iam a motivated and versatile individual,always eager to take on
              new challenges. Wit a passion for learning I am dedicated to
              delivering high-quality results. with a positive attitude and a
              growth mindset, i am ready to make a meaningful contribution and
              achieve great things.
            </p>
          </div>
          <a href="https://www.google.com/" target="_blank">
            Check Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1Js_XA64OaKt30L7ETtXuqDpkX1Y2T8Yj/view?usp=drive_link"
            target="_blank"
            className="flex items-center  justify-center mt-20 text-lg font-bold 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-14 w-40 rounded-full px-2 text-[#F2F3F4] shadow-inner shadow-[#854CE6]"
          >
            Check Resume
          </a>
          {props.isImage && (
            <div className="flex  items-center justify-center top-[50%] right-[50%] hover:transition ease-in-out delay-150  hover:scale-110 duration-300">
              <img
                className=" rounded-full w-[1200px]  border-4 border-[#854CE6]"
                src={mypic}
              ></img>
            </div>
          )}
        </div>
      </div>

      {/* {props.isImage? ( <div className="bg-[#1C1C27] max-w-[1600px] h-screen flex justify-between items-center mx-auto px-48">
        <div className="">
          <h1 className="text-6xl font-bold pb-2 text-[#F2F3F4]">
            
            Hi, I am <br />
            Nivethini Selvaraj{" "}
          </h1>
          <h1 className="text-4xl pb-6 text-[#F2F3F4]">
            Im a <span className="text-[#854CE6]">Front End Developer</span>
          </h1>
          <p className="w-3/5 text-xl font-medium text-[#b1b2b3]">
            Iam a motivated and versatile individual,always eager to take on new
            challenges. Wit a passion for learning I am dedicated to delivering
            high-quality results. with a positive attitude and a growth mindset,
            i am ready to make a meaningful contribution and achieve great
            things.
          </p>
          <a href="https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view" target="_blank" className="flex items-center justify-center absolute mt-20 text-lg font-bold bg-[#c026d3]  h-14 w-40 rounded-full px-2 text-[#F2F3F4] shadow-inner shadow-[#854CE6] hover:scale-110 duration-300">
            Check Resume
          </a>
        </div>
        <div className="flex  items-center justify-center top-[50%] right-[50%] hover:transition ease-in-out delay-150  hover:scale-110 duration-300">
          <img
            className=" rounded-full w-[1200px]  border-4 border-[#854CE6]"
            src={mypic}
          ></img>
       
        </div>
      </div>):( <div className="bg-[#1C1C27] max-w-[1600px] h-screen pt-30 flex justify-center items-center px-44">
        <div className="">
          <h1 className="text-6xl font-bold pb-2 text-[#F2F3F4]">
            
            Hi, I am <br />
            Nivethini Selvaraj{" "}
          </h1>
          <h1 className="text-4xl pb-6 text-[#F2F3F4]">
            Im a <span className="text-[#854CE6]">Front End Developer</span>
          </h1>
          <p className=" text-xl font-medium text-[#b1b2b3]">
            Iam a motivated and versatile individual,always eager to take on new
            challenges. Wit a passion for learning I am dedicated to delivering
            high-quality results. with a positive attitude and a growth mindset,
            i am ready to make a meaningful contribution and achieve great
            things.
          </p>
          <a href="https://drive.google.com/file/d/1txFKZD3LNIXMc329jD9c995AU8LItOXK/view" target="_blank" className="flex items-center justify-center absolute mt-20 text-lg font-bold bg-[#c026d3]  h-14 w-40 rounded-full px-2 text-[#F2F3F4] shadow-inner shadow-[#854CE6] hover:scale-110 duration-300">
            Check Resume
          </a>
        </div>
        
      </div>) }
      */}

      {/* without image */}
    </>
  );
}

export default About;
