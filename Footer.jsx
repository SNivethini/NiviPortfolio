import React from 'react'
import { FaGit, FaMailchimp } from 'react-icons/fa'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <div>
        {/* <div className='animation: gradient 15s ease infinite bg-gradient-to-r from-pink-800 to to-blue-700' >
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
  </div> */}
        <div className=' flex flex-col items-center m-auto p-24 text-[#b1b2b3] text-lg'>
            <div>
            <p className='font-extrabold text-2xl text-transparent bg-gradient-to-t from-blue-950 to-purple-800 bg-clip-text'>Nivethini Selvaraj</p>
            </div>
            <div>
                <ul className='flex flex-col gap-4 p-8 md:flex-row'>
                    <li className='hover:text-[#854CE6] hover:transition delay-500 cursor-pointer'>About</li>
                    <li className='hover:text-[#854CE6] hover:transition delay-500 cursor-pointer'>Skills</li>
                    <li className='hover:text-[#854CE6] hover:transition delay-500 cursor-pointer'>Experience</li>
                    <li className='hover:text-[#854CE6] hover:transition delay-500 cursor-pointer'>Projects</li>
                    <li className='hover:text-[#854CE6] hover:transition delay-500 cursor-pointer'>Education</li>
                </ul>

            </div>
            <div className='flex gap-4 '>
                <FaFacebook/>
                <FaInstagram/>
                <FaMailchimp/>
                <FaGit/>
            </div>
        </div>
    </div>
  )
}

export default Footer