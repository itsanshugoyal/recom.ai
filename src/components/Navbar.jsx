import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isActive, setActive] = useState("false");
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
              <div>
                {/* <!-- Website Logo --> */}
                <Link to="/" className="flex items-center py-4 px-2">
                  <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="font-semibold text-gray-500 text-lg ">Recom.ai</span>
                </Link>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <div className="hidden md:flex items-center space-x-1">
                {/* <a href="/" className="py-4 px-2 text-sky-900 border-b-4 border-sky-900 font-semibold ">Home</a> */}
                <Link
                  to="/movies" aria-current="page"
                  className="  py-4 px-2 text-gray-500 font-semibold hover:text-sky-900 transition duration-300"
                >
                  Movies/Webseries
                </Link>
                <Link
                  to="/books"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-sky-900 transition duration-300"
                >
                  Books
                </Link>
                <Link
                  to="/podcasts"
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-sky-900 transition duration-300"
                >
                  Podcast/Music
                </Link>
              </div>
            </div>
            {/* <!-- Secondary Navbar items --> */}
            <div className="hidden md:flex items-center space-x-3 ">
              <Link
                to="/newsletter"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-sky-900 hover:text-white transition duration-300"
              >
                Newsletter
              </Link>
              <Link
                to="/feedback"
                className="py-2 px-2 font-medium text-white bg-sky-900 rounded hover:bg-sky-700 transition duration-300"
              >
                Feedback
              </Link>
            </div>
            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={showMenu}>
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-sky-900 "
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
        <div className={isActive ? "hidden" : "null"}>
          <ul className="">
            <li className="active">
              <Link to="/movies" className="block text-sm px-2 py-4 hover:bg-sky-900 font-semibold">
                Movies/Webseries
              </Link>
            </li>
            <li>
              <Link to="/books" className="block text-sm px-2 py-4 hover:bg-sky-900 transition duration-300">
                Books
              </Link>
            </li>
            <li>
              <Link to="/podcasts" className="block text-sm px-2 py-4 hover:bg-sky-900 transition duration-300">
                Podcast/Music
              </Link>
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
