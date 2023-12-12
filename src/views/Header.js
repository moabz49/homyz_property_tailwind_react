import React,{ useEffect, useState } from 'react'
import CustomButton from '../components/CustomButton';
import Logo from '../images/logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from 'react-scroll';


const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if window object is defined (browser environment)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        // Check window.scrollY only if window is defined
        setIsActive(window.scrollY > 48);
      });
    }
  }, []);
  

  const linksArray = [
    { name: 'Residencies', id: 'residencies', offsetBg: -200, offsetSm: -80},
    { name: 'Our Value', id: 'value' , offsetBg: -100, offsetSm: 20},
    { name: 'Contact Us', id: 'contact', offsetBg: -50 , offsetSm: 50},
    { name: 'Get Started', id: 'started', offsetBg: 0, offsetSm: 100 }
  ];
  

  return (
    <header className={`${isActive? 'bg-neutral-800 shadow-lg' : 'bg-gradient-to-r from-black from-4% via-10%  via-stone-600 via to-50% to-black'} py-4 fixed items-center justify-center flex w-full transition-all z-40 `}>
      <div className='flex items-center h-full justify-between w-[95%] relative max-w-[1340px]'>
        <a href="/"> 
            <img src={Logo} alt="logo" className='h-10 ' />
        </a>
        <ul className='hidden lg:flex space-x-6 items-center text-neutral-300 '>
          {linksArray.map((item, i) => (
            <li key={i} className='cursor-pointer hover:scale-[105%] hover:underline ease-out duration-300 hover:text-neutral-200 transition-transform '>
              <Link to={item.id} smooth={true} offset={item.offsetBg} duration={500}>{item.name} </Link> 
            </li>
          ))}
          <CustomButton>contact</CustomButton>
        </ul>
        <HiMenuAlt3 onClick={() => setIsOpenMenu(prev => !prev)} className='lg:hidden text-neutral-300  text-[28px] hover:scale-[105%] hover:text-neutral-200 focus:text-neutral-200 duration-200 ease-out transition-transform' />
        {isOpenMenu ? (
        <div className='absolute top-12 right-10 text-neutral-300'>
          <ul className='lg:hidden bg-white text-black font-medium space-y-8 p-10 rounded-lg flex-col text-center items-center '>
            {linksArray.map((item, i) => ( 
             <li key={i} className='cursor-pointer hover:scale-[105%] hover:opacity-75 ease-out duration-300 transition-transform '>
              <Link to={item.id} smooth={true} offset={item.offsetSm}  duration={500}>{item.name} </Link> 
            </li>
            ))}
            <CustomButton>contact</CustomButton>
          </ul>
        </div>
        ): null}
      </div>      
    </header>
  )
}

export default Header;