import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" rounded-lg shadow bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex items-center sm:justify-between">
          <Link
            to="/"
            className="mx-auto sm:m-0  mt-4 flex items-center mb-4  sm:mb-0 space-x-3 rtl:space-x-reverse overflow-hidden h-16 w-44  "
          >
            <img src="/img/logo.webp" className="h-44 w-auto" alt="Recommend me something Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Recommend me something AI</span> */}
          </Link>
          <ul className="grid grid-cols-2 gap-2 sm:flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-300">
            <li className="m-2">
              <Link to="about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline me-4 md:me-6">
                Contact
              </Link>
            </li>
            <li>
              <Link to="terms" className="hover:underline me-4 md:me-6">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400 mb-1">
          By{" "}
          <a className="hover:underline" href="https://www.linkedin.com/in/anshu--goyal/" target="_blank">
            Anshu Goyal
          </a>{" "}
          and{" "}
          <a className="hover:underline" href="https://www.linkedin.com/in/sriramarkk/" target="_blank">
            Sriram
          </a>
          {/* <br /> */} and hosted by{" "}
          <a className="hover:underline" href="https://www.linkedin.com/in/dcubix-solutions/" target="_blank">
            Dcubix
          </a>
        </span>
        <span className="block text-sm text-gray-400 sm:text-center dark:text-gray-400">
          © 2023 &nbsp;
          <Link to="#" className="hover:underline">
            RecommendMeSomething™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
