// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const showMenu = () => {
    setActive(!isActive);
  };
  const menuItems = [
    { title: "Movies/Webseries", url: "/movies" },
    { title: "Books", url: "/books" },
    { title: "Podcast/Music", url: "/podcasts" },
  ];
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("/api/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="absolute w-full z-10 bg-gray-900 bg-opacity-50 backdrop-blur-md transition-colors duration-300">
      <div className="lg:mx-48 sm:mx-auto py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Brand Logo */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                "text-sky-900 lg:text-2xl text-xl hover:text-sky-950 tracking-wide  active:text-4xl" +
                (isActive ? "font-extrabold " : " font-bold")
              }
            >
              <img
                src="./img/logo-color.webp"
                alt="RecommendMeSomething"
                className="h-16 w-64 object-contain lg:h-20 lg:w-80"
              />
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {/* Navlinks */}
            {menuItems?.map((item) => (
              <NavLink
                key={item?.title}
                to={item?.url}
                className={({ isActive }) =>
                  "py-4 px-2  hover:text-gray-300 text-lg relative group font-bold" +
                  (isActive ? " text-gray-300" : " text-white")
                }
              >
                <span>{item?.title}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-300 group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center mx-4">
            <button aria-label="menu" className="outline-none mobile-menu-button" onClick={showMenu}>
              <svg
                className="w-6 h-6 text-white hover:text-gray-300"
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
      {/* Mobile Menu */}
      <div className={isActive ? "bg-black bg-opacity-75 shadow-lg " : "hidden"}>
        <ul className="text-center">
          {menuItems.map((item) => (
            <li key={item.title} className="border-b border-gray-300">
              <NavLink
                to={item.url}
                className="block text-sm px-2 py-4 text-white hover:bg-gray-800 hover:text-gray-300 transition duration-300"
                onClick={() => setActive(false)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
