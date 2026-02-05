import React from 'react'
  import imga from '/src/assets/dca.jpg';
  import imgb from '/src/assets/adca.jpg';
  import imgc from '/src/assets/tally.jpg';
  import imgd from '/src/assets/busy.jpg';
  import imge from '/src/assets/coral.jpg';


export default function Course() {
    const About=[
            { logo:imga , name:'D.C.A. (DIPLOMA IN COMPUTER APPLICATIONS)'},
            {  logo:imgb, name:"CERTIFICATE IN HINDI TYPING ( kurti and mangal font)"},
            { logo:imgc, name:"Accounting Courses( tally prime & tally erp 9.0)"},
            { logo:imgd, name:"BUSY" },
            { logo:imge, name:"D.T.P. COURSE (CORAL DRAW)" },
        ]
  return (
    <div>
        <h1 className='text-5xl font-semibold'> OUR <span className='text-red-500'>Courses</span></h1>
        
<section className='grid grid-cols-5 gap-3 p-2'>
{About.map((abo, index) => (

<div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm   pt-5  transition duration-500 ease-in-out 
                       transform 
                       hover:-translate-y-1 hover:scale-90 ">
  
    <div className="flex flex-col items-center pb-10 ">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={abo.logo} alt="Bonnie image"/>
        <h5 className="mb-1 text-sm font-medium text-gray-900 ">{abo.name}</h5>
        
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read more</a>
        </div>
    </div>
</div>
))}
</section>
        
    </div>
  )
}
    