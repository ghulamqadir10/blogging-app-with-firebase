import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import signup from '../pages/Signup'
// import login from '../pages/Login'
// import dashboard from '../pages/Dashboard'

function Navbar() {
  return (
    <div className="navbar bg-info text-white ">
      <div className="dropdown navbar-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden navbar-start w-1/3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]   w-1/3 p-1 shadow text-black"
        >
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="login">login</Link>
          </li>
          <li>
            <Link to="signup">Signup</Link>
          </li>
          <li>
            <Link to="addBlogs">Add Blogs</Link>
          </li>
        </ul>
        {/* <li><Link to='signup'>Signup</Link></li> */}
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Personal Blogging Web</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal text-xl">
          <li>
            <Link to="signup">Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
