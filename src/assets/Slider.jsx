
  // import React, { useState, useEffect } from 'react';
  // import imga from '/src/assets/iti1.jpeg';
  // import imgb from '/src/assets/iti2.jpg';
  // import imgc from '/src/assets/iti3.jpeg';
  
  //    // Import the CSS for styling
  
  // // Image URLs array
  // const images = [
  //   imge, imga,imgb,imgc,imgd,
  // ];
  
  // const Slider = () => {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  
  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //     }, 3000); // Change image every 3 seconds
  
  //     return () => clearInterval(intervalId); // Clean up interval when component unmounts
  //   }, []);
  
  //   return (
  //     <div className="slider-container mt-2">
  //       <div className="slider">
  //         <div
  //           className="slider-images"
  //           style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide right to left
  //         >   
  //           {images.map((img, index) => (
  //             <div className="slider-item  bg-black  " key={index}>

  //               <img src={img} alt={`Slide ${index}`} className="slider-image opacity-50 " />

           
  //             </div>
               
  //           ))}
            
  //         </div>

  //       </div>

  //     </div>
  //   );
  // };
  
  // export default Slider;
  