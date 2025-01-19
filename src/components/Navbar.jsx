import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-evenly items-center">
        <div
          className={
            isScrolled
              ? "text-2xl font-bold text-gray-800"
              : "text-2xl font-bold text-white"
          }
        >
          <img src="https://res.cloudinary.com/du9af99hf/image/upload/v1737287088/logo_ehy47b.png" alt="logo" className="w-20 h-auto rounded-full" />
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            className={
              isScrolled
                ? "text-lg font-bold text-gray-800"
                : "text-lg font-bold text-white"
            }
          >
            Home
          </a>
          <a
            href="#about"
            className={
              isScrolled
                ? "text-lg font-bold text-gray-800"
                : "text-lg font-bold text-white"
            }
          >
            About
          </a>
          <a
            href="#works"
            className={
              isScrolled
                ? "text-lg font-bold text-gray-800"
                : "text-lg font-bold text-white"
            }
          >
            Portfolio
          </a>
          <a
            href="#freelance"
            className={
              isScrolled
                ? "text-lg font-bold text-gray-800"
                : "text-lg font-bold text-white"
            }
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
