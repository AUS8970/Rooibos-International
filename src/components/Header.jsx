import React from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { IoIosMore } from 'react-icons/io';

const Header = () => {
  return (
    <div className="navbar fixed z-10 bg-rose-100 bg-opacity-80">
      <div className="navbar-start w-2/6 justify-between px-2">
        <a href='/' className="text-xl"> 
          <div className="w-10">
            <img src="https://i.ibb.co/RpMRkpHm/logo.png" alt="Rooibos_International_Logo" /> 
          </div>
        </a>
      </div>
      <div className="navbar-end w-4/6">
        <div className="gap-5 text-rose-800 font-merriweather mr-5 hidden md:flex">
          <a href="/" className=""> Home </a>
          <a href="supplay" className=""> What We Supply </a>
          <a href="inspiration" className=""> Inspiration </a>
          <a href="recipes" className=""> Recipes </a>
          <a href="contact" className=""> Contact </a>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="ml-2 md:hidden">
            <button className="btn btn-circle text-2xl hover:bg-rose-50 hover:bg-opacity-5 hover:border-rose-100 btn-ghost">
              <IoIosMore />
            </button>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-rose-600">
            <a href="/" className="hover:bg-rose-700 p-3 rounded"> Home </a>
            <a href="supplay" className="hover:bg-rose-700 p-2 rounded"> What We Supply </a>
            <a href="inspiration" className="hover:bg-rose-700 p-2 rounded"> Inspiration </a>
            <a href="recipes" className="hover:bg-rose-700 p-2 rounded"> Recipes </a>
            <a href="contact" className="hover:bg-rose-700 p-2 rounded"> Contact </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;