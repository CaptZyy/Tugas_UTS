import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full h-[109px] flex justify-center items-center font-serif font-medium z-50 bg-white shadow-md">
        <div className="max-w-[1920px] w-[97%] h-[70%] flex justify-between gap-1">
          <div className="h-full w-[35%] flex items-center font-bold text-xl">
            <h1>Chow & Chug</h1>
          </div>

          <div className="h-full w-[35%] flex items-center justify-center mt-2">
            <img
              className="h-[200px] w-[200px]"
              src="Chow&Chug-logo-Remover.png"
              alt="Chow & Chug Logo"
            />
          </div>

          <div className="h-full w-[35%] flex items-center justify-end gap-9 mr-8">
            <i className={`text-2xl bx bx-${searchOpen ? 'x' : 'search'}`} onClick={() => setSearchOpen(!searchOpen)}></i>
            <a href="#" className="font-semibold">
              SUBMIT
            </a>
          </div>
        </div>
      </div>

      <div className="fixed top-[109px] w-full h-[31px] z-50 bg-white shadow-xl">
        <div className="w-full h-full flex gap-5 items-center justify-center font-bold">
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/about-Chow&Chug')}>About Us</button>
          <button>Menu</button>
          <button>Contact</button>
        </div>
      </div>

      {searchOpen && (
        <div className="fixed top-[140px] w-full bg-white shadow-md z-50 flex justify-center pb-6">
          <input type="text" placeholder="Search Milk Products!" className="w-[80%] md:w-[40%] p-2 border border-gray-300 rounded-lg"/>
        </div>
      )}

      <div className="pt-[140px]"></div>
    </>
  );
}

export default Navbar;
