import React from 'react';
import { motion } from 'motion/react';

export default function Heading(props) {
  return (
    <motion.div
      className="flex justify-center items-center self-center justify-self-center w-full text-center"
      initial={{ y: 150 }}
      animate={{ y: 15 }}
      transition={{ type: 'spring', mass: 3.5, damping: 35, stiffness: 150 }}
    >
      <motion.h1
        className={`blue heading-text font-black font-stretch-115% flex self-center justify-self-center py-4 -mt-4 md:text-3xl text-sm `}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1.05 }}
        style={{ transformOrigin: 'center' }}
        transition={{ type: 'spring', mass: 3.5, damping: 35, stiffness: 150 }}
      >
        {props.heading}
      </motion.h1>
    </motion.div>
  )
}
