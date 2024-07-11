import React from 'react'
import {motion} from 'framer-motion'

function Marque() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className=' w-full py-10 bg-[#004D43] rounded-t-3xl'>
      <div className="text border-t-2 gap-0 border-b-2 tracking-[-0.7em] border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:"5",repeat:Infinity}} className='text-[10vw] leading-none font-normal uppercase '> We are Ochi </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:"5",repeat:Infinity}} className='text-[10vw] leading-none font-normal uppercase '> We are Ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:"5",repeat:Infinity}} className='text-[10vw] leading-none font-normal uppercase '> We are Ochi </motion.h1>
      </div>
    </div>
  )
}

export default Marque
