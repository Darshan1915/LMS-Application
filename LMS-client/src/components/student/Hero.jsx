import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="mb-4 text-4xl font-bold text-center">
                Empower your future with the courses designed to <span className="text-blue-500">fit your choice.</span>
            </h1>
            <p className="mb-6 text-lg text-center">
                We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
            </p>
            <div className="flex">
                <SearchBar/>
            </div>
        </div>
    );
};

export default Hero;

// import React from 'react'
// import { assets } from '../../assets/assets'

// function Hero() {
//   return (
//     <>
//       <div className='flex flex-col items-center max-w-full gap-4 mx-40 '>
//         <div>
//           <h1 className='mt-32 text-4xl font-bold text-center' >Empower your future with the courses designed to 
//           <span className='text-blue-500'> fit your choice.</span></h1>
//           <img className='md:ml-80 ml-96' src={assets.sketch}></img>
//         </div>
//         <div >
//           <h3 className='mt-5 text-center' >We bring together worid-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.</h3>
//         </div>
//         <div className='flex mt-5'>
//           <form class="max-w-full mx-auto">   
//               <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//               <div class="relative">
//                   <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                       <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                       </svg>
//                   </div>
//                   <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
//                   <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
//               </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Hero
