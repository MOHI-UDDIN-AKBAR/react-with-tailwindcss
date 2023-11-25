import { useState } from 'react'
import { Logo, NavLinks } from './index'
import { FiMenu } from 'react-icons/fi'

const Nav = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState<boolean>(false)
  return (
    <header className="w-full">
      <nav className="flex flex-row justify-between items-center px-0 md:px-2 relative lg:gap-2">
        <Logo />
        <NavLinks
          setIsMenuBarOpen={setIsMenuBarOpen}
          isMenuBarOpen={isMenuBarOpen}
        />
        <div className="mr-4 md:mr-8 lg:hidden text-blue-600/90 text-2xl md:text-3xl hover:text-blue-800 cursor-pointer hover:scale-105 hover:md:scale-110">
          {!isMenuBarOpen && <FiMenu onClick={() => setIsMenuBarOpen(true)} />}
        </div>
      </nav>
    </header>
  )
}

export default Nav
