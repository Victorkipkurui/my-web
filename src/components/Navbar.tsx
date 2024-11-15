import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaXmark} from "react-icons/fa6";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuon, setIsmenuon] = useState(false);
  const toggleMenu = ()=>{
    setIsmenuon(!isMenuon);
  }
  const navItems = [
    {path:'/', link:"Home"},
    {path:'/skills', link:"Skills"},
    {path:'/projects', link:"Projects"},
    {path:'/certifications', link:"Certifications"},
    {path:'/blog', link:"Blog"},
    {path:'/shop', link:"Shop"},
    {path:'/contacts', link:"Contacts"}
  ]

  return (
   <header className='text-white top-0 right-0 left-0'>

    {/*large devices*/}
    <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>

      <a href="/" className='text-xl font-bold text-blue-800'>Victor K</a>

      <ul className='md:flex gap-12 text-lg hidden'>
        {
          navItems.map(({path, link}) => <li className='text-gray-700 font-semibold hover:px-3 hover:text-blue-800 rounded' key={path}>
            <NavLink to={path}>{link}</NavLink>
          </li>)
        }
        <li className='text-gray-700 font-semibold hover:px-3 hover:text-blue-800 rounded'>
        <SignedOut>
         <SignInButton />
        </SignedOut>
        <SignedIn>
         <UserButton />
        </SignedIn>
        </li>
      </ul>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='cursor-pointer'>
          { isMenuon ? <FaXmark className='w-5 h-5 bg-black'></FaXmark> :<FaBars className='w-5 h-5 text-black'></FaBars>}</button>
      </div>

    </nav>
    {/* Menu on mobile*/}
    <div>
    <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white z-50 ${isMenuon ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150' : 'hidden'}`}>
        {
          navItems.map(({path, link}) => <li className='text-black hover:underline hover:text-blue-700' key={path}>
            <NavLink className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "active" : ""
              } onClick={toggleMenu} to={path}>{link}</NavLink>
          </li>)
        }
      </ul>
    </div>
   </header>
  )
}

export default Navbar