import React from 'react'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { ImCross } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { MdOutlineFactory } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";



export default function Navbar() {
  const [navbar, setNav] = useState(false);
 const toggle =() =>{
    setNav(!navbar);
  }
  console.log(navbar)
  const navb=[
    { logo: <IoMdHome />, name:"Home"},
    {  logo: "", name:"About Us"},
    { logo:<FaComputer />
        , name:"Course"},

    { logo: <MdAppRegistration />, name:"Registration"},
    { logo:<MdOutlineFactory />, name:"Training"},
    { logo:<IoIosContact />, name:"Contact"},
]
  
  return (
    <div className='grid grid-cols-6 bg-gray-300'>
      <div className='col-span-1 '><h1 className='text-black font-sans font-bold  text-2xl'>JSRITI</h1></div>
      <div className=' col-span-5 justify-items-center  '>
    
        <div className='   '>
        <button onClick={toggle} className=' lg:hidden md:hidden bg-white w-10 h-[30px] m-2 rounded-md border-1 border-red-600 justify-items-center text-red-600 ' >
          {navbar ?<ImCross/>:<MdMenu /> }</button>
        <nav className='hidden lg:block' >
        <ul className='cursor-pointer  flex gap-8 text-md p-2  '>
         {navb.map((nav, index)=>(
          <li  className='    text-black hover:text-red-600 transition duration-400 flex gap-2  ' key={index}>{nav.logo}{nav.name}</li>
         ))}
        </ul>
      </nav>
     
      </div>
      <nav className={`bg-wh/15 lg:hidden  w-60 absolute ${navbar? "open":"hidden"}`} >
        <ul className='cursor-pointer  gap-10 text-md p-2 font-serif '>
          {navb.map((nav, index)=>(
          <li className='    text-black hover:text-red-600 transition duration-400' key={index}>{nav.name}</li>
         ))} 
        </ul>
      </nav>
      </div>
    </div>
  )
}
