// import { useEffect, useRef, useState } from "react";
// const skills = [
//   { name: "React", level: 85 },
//   { name: "JavaScript", level: 80 },
//   { name: "CSS", level: 75 },
//   { name: "Node.js", level: 70 },
// ];

// export default function Skills() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // animate only once
//         }
//       },
//       { threshold: 0.4 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
// <div className="bg-black ">
//     <section ref={sectionRef} className="skills-section ">
//       <h2 className="text-[35px] text-white font-semibold text-left font-sans flex">My Skills</h2>

//       {skills.map((skill, index) => (
//         <div className="skill text-white" key={index}>
//           <span>{skill.name}</span>

//           <div className="progress">
//             <div
//               className="progress-bar text-white"
//               style={{
//                 width: isVisible ? `${skill.level}%` : "0%",
//               }}
//             />
//           </div>
//         </div>
//       ))}
//     </section>
//     </div>
//   );
// }
import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
const skills = [
  { name: "React", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "CSS", level: 75 },
  { name: "Node.js", level: 70 },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Number counting animation
  useEffect(() => {
    if (!isVisible) return;

    skills.forEach((skill, index) => {
      let start = 0;
      const end = skill.level;
      const duration = 1200;
      const stepTime = 20;
      const increment = end / (duration / stepTime);

      const counter = setInterval(() => {
        start += increment;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(Math.round(start), end);
          return updated;
        });

        if (start >= end) clearInterval(counter);
      }, stepTime);
    });
  }, [isVisible]);
  return (
    <div className="bg-black text-white p-4">
        <h2 className="text-[35px] text-white font-semibold m-5 font-sans  text-center">My Skills</h2>
        <p className="m-5">I'm Alok Kushawaha,a visual UX/UI Designer and Web Devloper</p>
            <section ref={sectionRef} className="skills-section grid grid-cols-2 gap-5  ">
      

      {skills.map((skill, index) => (
        <div className="skill " key={index}>
          <div className="skill-header">
            <span>{skill.name}</span>
            <span>{counts[index]}%</span>
          </div>

          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: isVisible ? `${skill.level}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </section>
    </div>

  );
}
