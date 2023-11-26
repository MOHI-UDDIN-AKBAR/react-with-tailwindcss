import React from "react";
import { navLinks } from "../constants";
import { RxCross1 } from "react-icons/rx";
import { NavLinksType } from "../types/index";

type NavLinksPropsType = {
  setIsMenuBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuBarOpen: boolean;
};

const NavLinks: React.FC<NavLinksPropsType> = ({
  isMenuBarOpen,
  setIsMenuBarOpen,
}) => {
  return (
    <div
      className={`relative z-50 mx-auto w-[270px] flex-1 overflow-hidden max-lg:absolute max-lg:right-0 max-lg:top-0 max-lg:h-screen max-lg:w-[300px] max-lg:bg-blue-950 ${
        isMenuBarOpen !== true ? "max-lg:hidden" : "block"
      }`}
    >
      <ul className="mx-auto flex flex-col justify-center gap-6 lg:w-3/4 lg:flex-row  lg:justify-evenly lg:gap-0">
        <li className="my-2 ml-4 mt-4 max-w-fit  cursor-pointer hover:scale-110 lg:hidden">
          <RxCross1
            className=" h-6 w-10 font-bold text-white"
            onClick={() => setIsMenuBarOpen(false)}
          />
        </li>
        {navLinks.map((navLink: NavLinksType) => (
          <li
            key={navLink.label}
            className=" my-2 flex p-px text-center sm:py-1 md:p-2 lg:p-0"
          >
            <a
              href={`${navLink.href}`}
              className="w-full cursor-pointer p-1 text-center text-sm font-semibold capitalize text-white hover:scale-125 lg:p-px lg:text-lg lg:font-normal lg:text-blue-400 hover:lg:scale-110"
            >
              {navLink.href.replace(/[#-]/g, " ")}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
