import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-14 shadow-md fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="flex justify-between h-14 items-center">
        <div className="flex space-x-2">
          <img src="aqsa.jpeg" className="h-12 w-12 rounded-full" alt="image" />
          <h1 className="font-samibold text-xl cursor-pointer">
            Aqsa <span className="text-[#0000ff] text-2xl">Naqvi</span>
            <p className="text-sm">Web developer</p>
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex space-x-8 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer"
                key={id}
              >
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                >{text}</Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? <ImCross size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>
      {/* mobile Navbar */}
      {menu && (
        <div>
          <ul className="md:hidden flex flex-col items-center h-screen justify-center bg-white ">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer font-samibold"
                key={id}
              >
                <Link
                onClick={() => setMenu(!menu)}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                >{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
