import React, { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShow(false);
      } else {
        // scrolling up → show navbar
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed flex justify-between top-0 left-0 w-full px-6 py-4 backdrop-blur-md bg-black/20 text-white transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="logo">
        <img className=" w-16 rounded-full" src="./motion.jpg" alt="" />
      </div>
      <div className="links flex  gap-5">
        {["Services", "Our Work", "About Us", "Inshights", "Contact Us"].map(
          (item, index) => (
            <a
              href="#"
              key={index}
              className={`font-semibold text-md ${index === 4 && "ml-36"}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
