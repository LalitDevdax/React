import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`navbar ${
        showNavbar ? "visible" : "hidden"
      } fixed top-0 z-[999] w-full px-20 py-8 transition-transform duration-300 ease-in-out bg-black/5  text-white flex justify-between items-center`}
    >
      <div className="logo cursor-pointer">
        <h1 className="text-3xl font-bold">Ochi.</h1>
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
          (item, index) => (
            <a
              key={index}
              className={` cursor-pointer no-underline text-md capitalize font-medium ${
                index === 4 && "ml-40"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
