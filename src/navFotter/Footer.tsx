import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer:React.FC = () => {
  const navigate=useNavigate()
    return (
        <footer className="bg-black shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="text-[2em] font-bold text-[#75C470] cursor-pointer">Plant Shop</a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a onClick={()=>navigate("/")}  className="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
              <a  onClick={()=>navigate("/store")} className="hover:underline me-4 md:me-6">Store</a>
            </li>
            <li>
              <a  onClick={()=>navigate("/about")}className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a  onClick={()=>navigate("/contact")}  className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
      </div>
    </footer>
    );
};

export default Footer;
