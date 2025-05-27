import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    "Services",
    "Our Work",
    "About Us",
    "Insights",
    "Contact Us",
  ];

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./motion.jpg"
            alt="Logo"
            className="w-12 h-12 object-cover rounded-full"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="uppercase text-sm tracking-wider font-semibold hover:text-zinc-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-white px-6 py-4 flex flex-col items-center space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="uppercase text-sm w-full text-center py-2 hover:bg-white/10 rounded"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default Navbar;
