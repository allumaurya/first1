import React from 'react';
import imge from '/src/assets/ab.jpg';
import { FaUserGraduate } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaBuilding } from "react-icons/fa6";
import { MdOutlineFactory } from "react-icons/md";






export default function Aboutus() {
      const About=[
        { logo:<FaUserGraduate/> , name:"100%" ,discri:"Total Placement"},
        {  logo:<IoIosContact/>, name:"+10000",discri:"Students taught so far"},
        { logo:<FaBuilding />, name:"+1000", discri:"Students placed in Top IT Company"},
        { logo:<MdOutlineFactory />, name:"Training" , discri:"Summer/winter/Industrial Training"},
    ]
  return (
    <div >
        <section className='text-3xl font-semibold text-red-500'>About Us</section>
        <section className='m-[10%] mt-2  justify-items-center text-xl'>We conduct full/short term courses for the students in these far flung, rural & district areas of the country. \
            It is only to make Information Technology as a basic knowledge to people of Rural & Urban area. Working in different fields of Programme
             & Commercial training conducted by the State Government & Central Government to approach every class of the society. IIJS Successfully running 
             from 2015, conducting various commercial training and Skill Development programs.
             <img src={imge} alt="" className='mt-5 w-[90%] h-[450px]  rounded-md'  />
             </section>
        <section className='  justify-items-center grid grid-cols-4 m-5'>
        {About.map((abo, index) => (
        <div key={index} class="max-w-sm text-7xl justify-items-center rounded overflow-hidden shadow-lg text-gray-400 p-2
        transition duration-500 ease-in-out 
                        hover:bg-red-600 transform 
                       hover:-translate-y-1 hover:scale-100 
        ">
  {/* img */}
  {abo.logo}
  <div class="px-6 py-4">
    <div class="font-bold text-black text-xl mb-2">{abo.name}</div>
    <p class="text-gray-700 text-base">
{abo.discri}</p>
  </div>
 
</div>
   ))}

        </section>
    </div>
  )
}
