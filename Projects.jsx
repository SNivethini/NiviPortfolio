import React from "react";
import { FaShopify } from "react-icons/fa";

function Projects() {
  return (
    <div>
      <div id="pro" className=" ">
        <div className="max-w-[1300px] mx-auto w-[88%] py-[96px] ">
          <p className=" font-extrabold text-2xl sm:text-2xl text-[#b1b2b3] flex justify-center">
            Project
          </p>
          <p className="font-extrabold text-sm lg:text-2xl xl:text-2xl sm:text-lg md:text-lg text-[#b1b2b3] flex justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-900  text-transparent bg-clip-text ">
            {" "}
            Here ,I have mentioned the project which are i developed
          </p>
          <div className="flex flex-col justify-center items-normal xl:flex-row lg:flex-row md:flex-row sm:flex-row  gap-[15px] py-[40px] lg:px-[80px] xl:px-[80px] sm:px-[10px] md:px-[10px] sm:gap-[10px] md:gap-[10px]  lg:gap-[10px] xl:gap-[20px] sm:justify-center md:justify-center lg:justify-center xl:justify-center">
            <div className="w-[300px] border-1 h-auto shadow-2xl p-8 shadow-gray-600 border-purple-00  rounded-2xl drop-shadow-xl bg-[#342250] text-[#b1b2b3] transition duration-150 ease-in animate-twice hover:animate-pulse ">
              <div className="flex gap-8">
                <div className=" text-6xl rounded-xl">
                  <FaShopify />
                </div>
                <div>
                  <p className="text-rose-600 text-lg font-semibold">Shopper</p>
                  <p>E-Commerce</p>
                </div>
              </div>
              <p className="pt-4">
                The Objective of this project is to develope a modern,
                responsive ecommerce website,providing users with a seamless
                shopping experiences I have used Hooks concepts which is{" "}
                <b> UseState,UseEffect and UseContext</b>, I have created a
                manual datasets with 36 products and developed this project
                using that.<br></br>
                <strong>• ReactJS • Tailwind CSS • HTML • JavaScript</strong>
              </p>
            </div>
            <div className="w-[300px] border-1 h-auto shadow-2xl shadow-gray-600 border-purple-00 p-8 rounded-2xl drop-shadow-xl bg-[#342250] text-[#b1b2b3] transition duration-150 ease-in animate-twice hover:animate-pulse ">
              <div className="flex gap-8">
                <div>
                  <img
                    className="w-[60px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZ3fAY0pDa8awRNUhKtXxkOAfZy7Nzd0RUA&usqp=CAU"
                    alt="no"
                  />
                </div>
                <div>
                  <p className="text-blue-400 text-3xl font-bold">Movies</p>
                  <p>Movies watchlist App</p>
                </div>
              </div>
              <p className="pt-4">
                Built a Movie Watchlist application, Analytics portal using
                React Js with seamless interaction of REST APIs using{" "}
                <b>AXIOS </b>optimized with React Query and updated with new
                dependency. Used JSON to get data to store in local storage .{" "}
                <br></br>
                <strong>
                  • ReactJS • JSON • AXIOS • Tailwind CSS • HTML • CSS •
                  JavaScript
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
