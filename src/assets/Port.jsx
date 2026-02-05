import React from 'react'
import img from '/src/assets/alok.jpg';
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
const TEXTS = ["Welcome to my website!", "I'm a Developer", "I make the complex simple."];
export default function Port() {
    const [textIndex, setTextIndex] = useState(0);
    


    useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex((index) => index + 1);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

        return (
            <div className='h-[500px] bg-black overflow-hidden   grid grid-cols-6 p-8  '>
                <div className='col-span-4 text-white justify-items-start'>
                    <h1 className='text-[30px]  text-red-600 ms-3 cursor-pointer'>Hello I'm</h1>
                    <h1 className='text-[70px] font-bold font-sans flex cursor-pointer' >ALOK<p className='ms-6 text-red-600'>KUSHAWAHA</p></h1>
                    <h1 className='text-2xl text-red-600 cursor-pointer' >
                        <TextTransition springConfig={presets.wobbly}>
                            {TEXTS[textIndex % TEXTS.length]}{" "}
                        </TextTransition>
                    </h1>
                    <p className='m-6 text-xl cursor-pointer '>A front-end developer is a type of software developer who creates the user-facing side of websites and applications. They are well-versed in web development languages such as HTML, CSS, and JavaScript that are designed for coding dynamic, interactive user experiences.</p>
                    <h1 className='flex gap-2 text-2xl text-red-600 cursor-pointer ' ><CiInstagram />
                    <CiFacebook />
                    <FaWhatsapp />
                    </h1>
                </div>
                <div className='im col-span-2'></div>
            </div>
        )
    }
