import React from "react";
import { assets } from '../../assets/assets'

export default function Footer() {
  return (
    <footer className="px-6 py-12 text-gray-300 bg-gray-900 md:py-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Left Section - Logo & Description */}
        <div>
          <div className="flex items-center mb-4">
            {/* Icon using Google Material Icon */}
            <img src={assets.logo} alt='Logo' className='cursor-auto w-50 lg:w-24'/>
            {/* <span className="ml-1 text-xl">Edemy</span> */}
          </div>
          <p className="max-w-xs leading-relaxed text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className="flex flex-col space-y-3 text-gray-400">
          <h3 className="mb-4 font-semibold text-white">Company</h3>
          <a href="#" className="transition-colors duration-200 hover:text-blue-500">Home</a>
          <a href="#" className="transition-colors duration-200 hover:text-blue-500">About us</a>
          <a href="#" className="transition-colors duration-200 hover:text-blue-500">Contact us</a>
          <a href="#" className="transition-colors duration-200 hover:text-blue-500">Privacy policy</a>
        </div>

        {/* Right Section - Newsletter Subscribe */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Subscribe to our newsletter</h3>
          <p className="max-w-xs mb-5 leading-relaxed text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex max-w-md overflow-auto">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-grow px-4 py-3 text-gray-200 placeholder-gray-500 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 font-semibold text-white transition-colors duration-200 bg-blue-600 hover:bg-blue-700 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-800 select-none">
        Copyright 2024 &copy; Edemy. All Right Reserved.
      </div>
    </footer>
  );
}