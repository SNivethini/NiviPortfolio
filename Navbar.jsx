import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className=" z-[9999] fixed top-0 left-0 right-0 px-[20px] xl:px-[100px] lg:px-[100px] py-[20px]  xl:h-[96px] lg:h-[96px]  h-[60px] flex text-[#FFFFFF] bg-[#1C1C27]">
        <div className="max-w-[1300px] mx-auto w-[88%]  flex justify-between items-center">
          <div className="flex items-center font-bold text-2xl gap-4  sm:pt-[10px]">
            <DiCssdeck />
            <h1>Portfolio</h1>
          </div>
          <div className="flex items-center">
            <ul className="hidden sm:hidden md:hidden xl:flex lg:flex lg:gap-6 xl:gap-6 lg:text-lg  xl:text-lg md:text-sm ">
              <li className="hover:text-[#854CE6] hover:transition delay-500 cursor-pointer">
              <a
          href="https://www.google.com/" 
          target="_blank"
          >
          Check Resume
        </a><a href="#about"> About</a>
              </li>
              <li className="hover:text-[#854CE6] hover:transition delay-500 cursor-pointer">
                <a href="#skill"> Skills</a>
              </li>
              <li className="hover:text-[#854CE6] hover:transition delay-500 cursor-pointer">
                <a href="#exp"> Experience</a>
              </li>
              <li className="hover:text-[#854CE6] hover:transition delay-500 cursor-pointer">
                <a href="#pro">Projects </a>
              </li>
              <li className="hover:text-[#854CE6] hover:transition delay-500 cursor-pointer">
                <a href="#edu">Education</a>
              </li>
            </ul>
          </div>
          <div
            onClick={handleClick}
            className="lg:hidden xl:hidden flex items-end text-xl z-10 "
          >
            <FaBars />
          </div>

          {/* mobile view */}
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-violet-950 flex flex-col gap-6 justify-center items-center"
            }
          > 
            <li>
            
            <a href="#about"> About</a>
            </li>
            <li>
              <a href="#skill">Skills</a>
            </li>
            <li>
              <a href="#exp">Experience</a>
            </li>
            <li>
              <a href="#pro">Projects</a>
            </li>
            <li>
              <a href="#edu">Education</a>
            </li>

          </ul>

          <div className=" xl:flex xl:items-center lg:flex lg:items-center hidden md:hidden">
            <button className="text-lg text-[#854CE6] border-2 bg-transparent border-[#854CE6] p-2 rounded-full font-semibold w-32 cursor-pointer hover:bg-[#854CE6] hover:text-[#F2F3F4]">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
