import React from 'react'
import { navLinks } from '../constants'
import { RxCross1 } from 'react-icons/rx'
import { NavLinksType } from '../types/index'

type NavLinksPropsType = {
  setIsMenuBarOpen: React.Dispatch<React.SetStateAction<boolean>>
  isMenuBarOpen: boolean
}

const NavLinks: React.FC<NavLinksPropsType> = ({
  isMenuBarOpen,
  setIsMenuBarOpen,
}) => {
  return (
    <div
      className={`flex-1 max-lg:absolute max-lg:right-0 max-lg:top-0 max-lg:h-screen w-[270px] max-lg:w-[300px] max-lg:bg-blue-950 overflow-hidden mx-auto ${
        isMenuBarOpen !== true ? 'max-lg:hidden' : 'block'
      }`}
    >
      <ul className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-6 lg:gap-0  lg:w-3/4 mx-auto">
        <li className="lg:hidden cursor-pointer hover:scale-110 my-2  max-w-fit ml-4 mt-4">
          <RxCross1
            className=" text-white w-10 h-6 font-bold"
            onClick={() => setIsMenuBarOpen(false)}
          />
        </li>
        {navLinks.map((navLink: NavLinksType) => (
          <li
            key={navLink.label}
            className=" text-center p-px sm:py-1 md:p-2 lg:p-0 flex my-2"
          >
            <a
              href={`${navLink.href}`}
              className="cursor-pointer hover:scale-125 hover:lg:scale-110 capitalize font-semibold lg:font-normal text-sm text-white lg:text-blue-400 text-center w-full p-1 lg:p-px lg:text-lg"
            >
              {navLink.href.replace(/[#-]/g, ' ')}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavLinks
