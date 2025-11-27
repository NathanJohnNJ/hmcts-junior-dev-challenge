import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export default function Title (props){
  const current = useLocation();
  console.log(current)
  return (
    <motion.div 
    className="absolute left-50 top-10 flex justify-center items-center self-center justify-self-center w-full -translate-x-50" 
    initial={{y: -150}} 
    animate={{y: -15}} 
    transition={{type: 'spring', mass: 3.5, damping: 35, stiffness: 150}}
    >
      <motion.h1 
      className="my-text text-5xl font-black font-stretch-115% flex self-center justify-self-center py-4 -mt-4" 
      initial={{opacity: 0, scale: 0}} 
      animate={{opacity: 1, scale: 1.05}} 
      style={{transformOrigin: 'center'}} 
      transition={{type: 'spring', mass: 3.5, damping: 35, stiffness: 150}}
      >
        {props.title}
      </motion.h1>
    </motion.div>
  )
}

// export default function Title (props){

//   return (
//     <>
//     <motion.h1 className="absolute left-50 top-10 flex justify-center items-center self-center justify-self-center w-full -translate-x-50 my-text text-7xl font-black font-stretch-115%" animate={{opacity: [0, 1, 1, 0], scaleY: [0, 1.2, 1.3, 1.1, 1.4, 0], transition: {opacity: {times: [0, 0.05, 0.95, 1], duration: 4}, scaleY: {times: [0, 0.1, 0.65, 0.75, 0.85, 1], duration: 4}}}}>
//       |
//     </motion.h1>

//     {
//       props.title.split().map((letter, i) => {
//         const delay = (1 / props.title.length) * i;
//         return <motion.h1
//           key={i}
//           className="absolute left-50 top-10  my-text text-5xl font-black font-stretch-115% flex self-center justify-self-center"
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1.05 }}
//           style={{ transformOrigin: 'center' }}
//           transition={{ type: 'spring', mass: 3.5, damping: 35, stiffness: 175, delay: delay }}
//         >
//           {letter}
//         </motion.h1>
//       })
//     }
//     </>
//   )
// }
