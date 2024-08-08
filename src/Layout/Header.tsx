"use client";
// import Image from "next/image";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import menuData from "./menuData";
import IMG1 from "../images/logo/logo.svg";
import { CiGlobe } from "react-icons/ci";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const [shrunk, setShrunk] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
      setShrunk(true);
    } else {
      setSticky(false);
      setShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    var elemint=document.getElementById("mybody");
    elemint?.addEventListener("click", ()=>{
      setNavbarOpen(false);
    });
    
  });

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number ) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <>
        <div className={`bg-primary h-9 z-40 top-0 left-0 w-full fixed `}>
          <div className="container flex justify-between items-center h-full" >
            <div className="text-white flex items-center text-xs" ><CiGlobe /><select className="bg-primary">
              <option className="bg-white text-primary px-3 py-2">English</option>
              <option className="bg-white text-primary px-3 py-2"> Arabic</option>
              </select></div>
            <div className="text-white text-xs"><a href="mailto:info@internationalfruithub.com" className="mr-5 xs:hidden md:inline hover:text-darkprimary ease-in-out	duration-300">info@internationalfruithub.com</a> Contact Us: <a href="tel:+201005400407" className="text-white font-bold hover:text-darkprimary ease-in-out	duration-300">+20 100 5400 407</a></div>
          </div>
        </div>

      <header
        className={`header left-0 top-9 z-40 flex w-full ${
          shrunk ? "shrunk" : ""
        } items-center ${
          "dark:bg-white dark:shadow-sticky-dark sm:h-24 xs:h-28 fixed z-[9999] bg-white shadow-sticky backdrop-blur-lg transition"
        }`}
      >

        <div className="bg-white opacity-25 w-full h-full absolute"></div>
        <div className="container flex justify-between items-center">
          <div className="relative w-full -mx-4 flex !items-center !justify-between">
            <div className=" w-28 md:w-36 max-w-full px-4">
              <Link
                to="/"
                className={`header-logo block w-full ${"py-2 lg:py-2"}`}
              >
                <img
                  src={IMG1}
                  alt="logo"
                  width={120}
                  height={40}
                  className="w-full h-full dark:hidden"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
        <li key={index} className="group relative">
          {menuItem.path ? (
            <Link
              to={menuItem.path}
              className={`flex py-2 text-base text-black lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                currentPathname === menuItem.path
                  ? "text-primary"
                  : "hover:text-primary text-black"
              }`}
            >
              {menuItem.title}
            </Link>
          ) : (
            <>
              <p
                onClick={() => handleSubmenu(index)}
                className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
              >
                {menuItem.title}
                <span className="pl-3">
                  <svg width="25" height="24" viewBox="0 0 25 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </p>
              <div
                className={`submenu relative left-0 top-full rounded-sm bg-black transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {/* {menuItem.submenu.map((submenuItem, index) => (
                  <Link
                    to='' // Changed from href to to
                    key={index}
                    className="block rounded py-2.5 text-sm text-white hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                  >
                    {submenuItem.title}
                  </Link>
                ))} */}
              </div>
            </>
          )}
        </li>
      ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
