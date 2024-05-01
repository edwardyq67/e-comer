import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const people = [["Home","/"], ["Store","/store"], ["About","/about"], ["Contact","/contact"]];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const out = () => {
    localStorage.removeItem('token');
    window.location.reload()
  };

  return (
    <div className={`flex justify-center w-full z-50 transition-all duration-200 fixed ${isOpen ? "h-[20em]" : "h-[4.5em]"}`} style={{ background:"rgba(0,0,0,.5)"}}>
      <div className="container mx-auto z-50 fixed p-3 flex justify-between items-center">
        <a onClick={()=>navigate("/")} className="text-[2em] font-bold text-[#75C470] cursor-pointer">Plant Shop</a>
        <nav className={isOpen ? "flex" : "hidden md:flex"}>
          <ul className="gap-2 md:bg-transparent flex bg-transparent absolute md:relative flex-col md:flex-row w-full shadow md:shadow-none text-center top-12 left-0 md:top-0 md:flex">
            {people.map((person, index) => (
              <a onClick={()=>navigate(person[1])} key={index} className="px-3 text-white py-2 cursor-pointer rounded hover:text-[#75C470] hover:bg-none md:hover:bg-white">{person[0]}</a>
            ))} 
            <a onClick={()=>navigate("/card")} className="text-[#75C470] md:mb-0 mb-2 mx-4 flex text-center justify-center items-center space-x-1 cursor-pointer hover:text-white">
              
              <i  o className="fa-solid fa-cart-shopping"></i>
            </a>
            {
              (localStorage.getItem('token'))?<div className="ml-2 flex text-center justify-center items-center text-[#75C470] space-x-1 cursor-pointer hover:text-white">
              <i onClick={out} className="fa-solid fa-right-from-bracket"></i>
            </div>: <div className="ml-2 flex md:mb-0 mb-2  text-center justify-center items-center text-[#75C470] space-x-1 cursor-pointer hover:text-white">
              <i onClick={() => navigate("/usuario")} className="fa-solid fa-user"></i>
            </div>
            }
            
           
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white flex justify-center items-center" onClick={toggleNavbar}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "hidden" : "flex"}>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? "flex" : "hidden"}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
