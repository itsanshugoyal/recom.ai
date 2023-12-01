import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const showMenu = () => {
    setActive(!isActive);
  };

  return (
    <div>
      {/* <!-- Navbar goes here --> */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div className="items-center justify-center flex">
                {/* <!-- Website Logo --> */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "py-4 px-2   text-gray-800 text-xl   hover:text-blue-900 " +
                    (isActive ? "font-extrabold " : "font-bold")
                  }
                >
                  {/* <img
                    src="./img/logo.png"
                    alt=""
                    className="left-8 top-0 overflow-hidden h-fit w-40 mr-2 bg-cover absolute bg-no-repeat"
                  /> */}
                  Recom.ai
                </NavLink>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1 ">
                {/* <a href="/" className="py-4 px-2 text-sky-900 border-b-4 border-sky-900 font-semibold ">Home</a> */}
                <div>
                  <i className="fi fi-rr-camera-movie"></i>
                  <NavLink
                    to="/movies"
                    aria-current="page"
                    className={({ isActive }) =>
                      "py-4 px-2 text-gray-800 hover:text-sky-900  transition duration-300 " +
                      (isActive ? "font-bold" : "font-semibold")
                    }
                  >
                    Movies/Webseries
                  </NavLink>
                </div>

                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    "py-4 px-2 text-gray-800 hover:text-sky-900  transition duration-300 " +
                    (isActive ? "font-bold" : "font-semibold")
                  }
                >
                  Books
                </NavLink>
                <NavLink
                  to="/podcasts"
                  className={({ isActive }) =>
                    "py-4 px-2 text-gray-800 hover:text-sky-900  transition duration-300 " +
                    (isActive ? "font-bold" : "font-semibold")
                  }
                >
                  Podcast/Music
                </NavLink>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ">
              <NavLink
                to="/newsletter"
                className={({ isActive }) =>
                  "py-2 px-2  text-gray-800 rounded hover:bg-sky-900 hover:text-white transition duration-300 " +
                  (isActive ? "font-semibold" : "font-medium")
                }
              >
                Newsletter
              </NavLink>
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  "py-2 px-2  text-gray-800 rounded hover:bg-sky-900 hover:text-white transition duration-300 " +
                  (isActive ? "font-semibold" : "font-medium")
                }
              >
                Feedback
              </NavLink>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={showMenu}>
                <svg
                  className=" w-6 h-6 text-gray-800 hover:text-sky-900 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- mobile menu --> */}
        <div className={isActive ? "" : "hidden"}>
          <ul className="">
            <li className="active">
              <NavLink to="/movies" className="block text-sm px-2 py-4 hover:bg-sky-900 font-semibold">
                Movies/Webseries
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="block text-sm px-2 py-4 hover:bg-sky-900 transition duration-300">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/podcasts" className="block text-sm px-2 py-4 hover:bg-sky-900 transition duration-300">
                Podcast/Music
              </NavLink>
            </li>
            <li>
              <a href="#contact" className="block text-sm px-2 py-4 hover:bg-sky-900 transition duration-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <h1 className="text-sky-900 text-2xl md:text-3xl lg:text-4xl font-bold p-4">Tailwind Navigation Toolbar</h1> */}
    </div>
  );
}

export default Navbar;
