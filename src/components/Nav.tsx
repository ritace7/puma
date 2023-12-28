import headerLogo from '../assets/logo.png';
import hamburgerIcon from '../assets/hamburger.png';
import crossIcon from '../assets/cross.png';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {

  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);  

  const toggleNavbar = () => {
    setIsNavbarVisible((prev) => !prev)
  }

  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                    src={headerLogo}
                    alt='logo'
                    width={110}
                    height={29}
                />
            </a>
            <ul className={`flex-1 flex justify-center items-center gap-16 ${isNavbarVisible?'max-lg:mobile_nav':'max-lg:hidden'}`}>
                {navLinks.map((item) => (   
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className={`font-monsterrat leading-normal text-lg text-gray-500 ${isNavbarVisible && 'max-lg:mobile_nav_link' } hover:text-coral-red`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block cursor-pointer'>
                <img 
                    onClick={toggleNavbar}
                    src={isNavbarVisible? crossIcon: hamburgerIcon}
                    alt='Hamburger'
                    width={25}
                    height={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav