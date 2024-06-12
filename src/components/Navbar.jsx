import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Array nav
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Blogs", path: "blogs" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className="w-full  bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-6 ${isSticky ? "sticky top-0 left-0 right-0 bg-black" : "transition-all duration-300 ease-in"} `}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="/" className="text-white text-3xl font-bold">
            <span className="text-orange-400">P</span>ixelPulse Studio
          </a>

          {/* Menu button large device */}
          <ul className="md:flex space-x-12 hidden navitems">
            {navItems.map(({ link, path }) => (
              <Link to={path} activeClass="active" spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white uppercase hover:text-orange-400 cursor-pointer">
                {link}
              </Link>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-transparent text-white p-2 border rounded-full">
              <FaBarsStaggered />
            </button>
          </div>

          {/* Menu button small device */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <FaXmark className="h-6 w-6" /> : <FaBarsStaggered className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Nav items small device */}
        <div className={`space-y-4 px-4 mt-14 py-7 bg-black ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link to={path} activeClass="active" spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white uppercase hover:text-orange-400 cursor-pointer">
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
