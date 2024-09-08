import { RxHamburgerMenu,RxCross1 } from "react-icons/rx";
import {useState} from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/index.jsx'
const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);
    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    
  return (
    <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex justify-evenly items-center flex-shrink-0">
                    <img className='h-10 w-30 mr-2' src={logo} alt="logo" />
                </div>
                <ul className='hidden md:flex lg:flex ml-14 space-x-12'>
                    {navItems.map((item,index)=>(
                        <li className="hover:text-blue-500 transition-colors duration-300" key={index}>
                            <a href={item.href}>{item.label}</a>
                            {console.log(item.label)}
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden md:hidden sm:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen?<RxCross1 />:<RxHamburgerMenu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex justify-center items-center transition-all duration-500 lg:hidden">
                    <ul className='flex flex-col align-between'>
                    {navItems.map((item,index)=>(
                        <li className="hover:text-blue-500 transition-colors duration-300 py-4" key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar