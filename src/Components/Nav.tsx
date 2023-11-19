import { navLinks } from '../constants'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="absolute w-full mx-auto p-1 md:p-2 my-[8px] md:my-4 ">
      <nav className="flex justify-between relative">
        <a
          href="/"
          className="basis-[20%] sm:basis-[30] px-2  grid place-items-center"
        >
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="cursor-pointer"
          />
        </a>
        <div
          className={`  lg:basis-full max-lg:absolute max-lg:h-screen max-lg:w-[300px] max-sm:w-[250px] max-lg:-right-[5px] max-lg:-top-1 max-lg:bg-gray-600 ${
            isOpen === true ? 'block' : 'max-lg:hidden'
          }`}
        >
          <ul className=" flex flex-row max-lg:flex-col lg:justify-evenly lg:items-center p-px max-lg:gap-y-4 w-full mx-auto">
            <li
              className="flex max-lg:w-full justify-end lg:hidden cursor-pointer p-2"
              onClick={() => setIsOpen(false)}
            >
              <RxCross2 className="text-red-900 text-3xl" />
            </li>
            {navLinks.map((navLink: string, i: number) => (
              <li
                key={i}
                className="flex max-lg:w-full text-center lg:justify-center"
              >
                <a
                  href={navLink}
                  className=" font-mono capitalize lg:text-xl md:text-lg sm:text-md text-sm text-stone-300 cursor-pointer py-2 lg:py-px px-4 max-lg:w-full max-lg:hover:scale-150   "
                >
                  {navLink.replace('#', ' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`  cursor-pointer grid place-items-center bg-transparent mr-5 ${
            isOpen === true ? 'hidden' : 'grid'
          } `}
          onClick={() => setIsOpen(true)}
        >
          <img src={hamburger} alt="menuIcon" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav
