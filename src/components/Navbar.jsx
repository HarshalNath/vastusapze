import logo from "../assets/logo.webp";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { LINKS } from "../constants/";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const togglemenu = () => {
    setisOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="flex justify-between items-center px-2 py-7 max-w-7xl mx-auto">
        <div>
          <a href="">
            <img src={logo} alt="logo" width={150} height={15} />
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={togglemenu}
            aria-label={isOpen ? "close menu" : "open menu"}
            className="text-2xl"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex md:space-x-4 space-x-8 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-lg font-medium p-2 hover:border-b-2 hover:border-black duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } mt-2 absolute px-4 border-b-4 w-full bg-neutral-50 md:hidden`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
