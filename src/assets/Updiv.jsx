import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";




export default function Updiv() {
  return (
    <div>
        <section className='bg-gray-300 grid grid-cols-6 p-1 '>
            <div className=' col-span-4 '>
                <marquee behavior="" direction="left">
                   <p className='text-xl'>jai shree ram private ITI collge </p>
                </marquee>
            </div>
            <div className=' col-span-2  justify-end text-black text-3xl flex gap-4 pe-3'>
                < FaFacebookF className='ico p-2 '/> 
                             < FaTwitter className='ico p-2'/>
                             < FaInstagram className='ico p-2'/>
                             <FaWhatsapp className='ico p-2'/>
                             <FaGooglePlusG className=' p-2'/>

            </div>
        </section>
    </div>
  )
}
