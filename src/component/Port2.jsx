import React from 'react'
import img from '/src/assets/gem.png'

export default function Port2() {
  return (
    <div className='bg-black mt-2 grid grid-cols-6'>

        <div className='col-span-2'>
    <img className='a' src={img} alt="" />
        </div>
        <div className=' p-5 col-span-4 justify-items-start'>
       <section className='text-2xl text-red-600 font-sans flex'>Who am i?</section>
       <section className='text-[35px] text-white font-semibold text-left font-sans flex'> I'm Alok Kushawaha,a visual UX/UI Designer and Web Devloper</section>
       <section>
           <p className=' mt-4 text-[12px] text-white text-start font-sans cursor-pointer '>A front-end developer is a type of software developer who creates the user-facing side of websites and applications. They are well-versed in web development languages such as HTML, CSS, and JavaScript that are designed for coding dynamic, interactive user experiences.</p>
        </section>
      <hr className="w-full my-6 border-[1px] border-b-gray-500" />

        <section className='flex   text-start text-white'>
<section className='w-1/2'>
    Name: Alok Kushawaha<br/>
    Age: 26
</section>
<section className='w-1/2 '>
    From: Varanasi
    <br/>Email:alokk9792@gmail.com
</section>

        </section>
<section>
          <button className=' text-white bg-red-600 p-1 px-3 rounded-sm m-2'>Download CV</button>
</section>
        </div>
    </div>
  )
}
