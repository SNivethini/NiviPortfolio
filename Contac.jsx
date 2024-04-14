import React from 'react'

function Contac() {
  return (
    <div>
      <div class=" clip-custom  bg-gradient-to-r from-[#18071f]  via-purple-950 to-[#120029] to-90% ">
    <div className='max-w-[1300px] mx-auto w-[88%] flex justify-center'>
    <div class="w-[400px] sm:w-[500px] md:w-[800px] xl:w-[800px] lg:w-[800px] my-24  px-6 py-6 bg-[#120029] bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <h1 class="text-3xl font-extrabold text-center text-[#b1b2b3] mb-5">Contact Me</h1>
      
        <form class="flex flex-col  items-center justify-center">
            <div class="mb-5">
                <label class="text-[#b1b2b3] font-semibold mb-2" for="name">Name</label>
                <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-[300px] sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[600px] appearance-none leading-normal" type="text" id="name" name="name" required/>
            </div>
            <div class="mb-5">
                <label class="text-[#b1b2b3] font-semibold mb-2" for="email">Email</label>
                <input class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-[300px] sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[600px] appearance-none leading-normal" type="email" id="email" name="email" required/>
            </div>
            <div class="mb-5">
                <label class="text-[#b1b2b3] font-semibold mb-2" for="message">Message</label>
                <textarea class="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-[300px] sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[600px] appearance-none leading-normal" id="message" name="message" rows="5" required></textarea>
            </div>
            <div>
      
           

            <button class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" type="submit">Send Message</button>
            </div>
        </form>
    </div>
    </div>
</div>
      
    
    </div>
  )
}

export default Contac