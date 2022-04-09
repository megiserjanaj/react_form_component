import React from "react";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  return (
    <div className="w-full" id="navbar">
      <nav className="relative w-full flex flex-wrap items-center bg-white border-gray-200 rounded">
        <div className="">
          <a href="#" target="_blank">
            <img src="" alt=" " className="mr-3 h-6 sm:h-9" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
        </div>
        <div className="menu-icon"></div>
        <ul className="">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} target="_self">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
