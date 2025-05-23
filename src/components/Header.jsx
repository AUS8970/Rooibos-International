import React from 'react';

const Header = () => {
  return (
    <div className="navbar fixed z-10 bg-rose-100 bg-opacity-80">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src="https://i.ibb.co/RpMRkpHm/logo.png" alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a href='/' className="px-4 text-xl"> 
          <div className="w-10">
            <img src="https://i.ibb.co/RpMRkpHm/logo.png" alt="Rooibos_International_Logo" /> 
          </div>
        </a>
      </div>
      <div className="navbar-end gap-5 text-rose-800 font-merriweather mr-5">
        <a href="/" className=""> Home </a>
        <a href="supplay" className=""> What We Supply </a>
        <a href="inspiration" className=""> Inspiration </a>
        <a href="recipes" className=""> Recipes </a>
        <a href="contact" className=""> Contact </a>
      </div>
    </div>
  );
};

export default Header;