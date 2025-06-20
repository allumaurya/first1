import React from 'react'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { ImCross } from "react-icons/im";
export default function Nav() {
  const [navbar, setNav] = useState(false);
 const toggle =() =>{
    setNav(!navbar);
  }
  console.log(navbar)
    const nav = ['Home','About','Services','Porfolio','Blog','Contact']
  return (
    <div className='grid grid-cols-6 bg-black'>
      <div className='col-span-1 '><h1 className='text-white font-sans font-bold  text-2xl'>Mr.Devloper</h1></div>
      <div className=' col-span-5 justify-items-end  '>
    
        <div className='   '>
        <button onClick={toggle} className=' lg:hidden md:hidden bg-white w-10 h-[30px] m-2 rounded-md border-1 border-red-600 justify-items-center text-red-600 ' >
          {navbar ?<ImCross/>:<MdMenu /> }</button>
        <nav className='hidden md:block' >
        <ul className='cursor-pointer  flex gap-10 text-xl p-2 font-serif '>
         {nav.map((na)=>(
          <li className='    text-white hover:text-red-600 transition duration-400' key={na.id}>{na}</li>
         ))}
        </ul>
      </nav>
     
      </div>
      <nav className={`bg-wh/15 lg:hidden  w-60 absolute ${navbar? "open":"hidden"}`} >
        <ul className='cursor-pointer  gap-10 text-xl p-2 font-serif '>
         {nav.map((na)=>(
          <li className='    text-white hover:text-red-600 transition duration-400' key={na.id}>{na}</li>
         ))}
        </ul>
      </nav>
      </div>
    </div>
  )
}
