import { motion } from 'framer-motion'
import React, { useState } from 'react'
function Feature() {
  const [hovering,setHovering]=useState(false);
  const [hoveringLeft,setHoveringLeft]=useState(false);
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[2px] border-zinc-700 pb-10'>
        <h1 className='text-7xl tracking-tighter'>Feature Project</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-5 mt-10'>
            <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className="cardcontainer relative w-1/2 h-[75vh] ">
                <h1 className='flex absolute z-40 text-7xl overflow-hidden tracking-tighter top-[45%] -right-20  text-violet-300'>
                {"FYZE".split("").map((item,index)=>(
                    <motion.span key={index} initial={{y:"100%"}} animate={hovering?({y:"0"}):({y:"100%"})} transition={{ease:"easeInOut",delay:index*.1}} className='inline-block ' >{item}</motion.span>
                ))}
                </h1>
                <div className='w-full h-full rounded-xl bg-green-400 overflow-hidden'>
                    <img  className="w-full h-full bg-cover" src='https://img.freepik.com/free-photo/digital-art-moon-tree-wallpaper_23-2150918811.jpg' alt="" />
                </div>
            </div>
            <div onMouseEnter={()=>setHoveringLeft(true)} onMouseLeave={()=>setHoveringLeft(false)} className="cardcontainer relative w-1/2 h-[75vh] ">
            <h1 className='flex absolute z-40 text-7xl overflow-hidden tracking-tighter top-[45%] -left-20 text-yellow-200 '>
                {"VISE".split("").map((item,index)=>(
                    <motion.span key={index} initial={{y:"100%"}} animate={hoveringLeft?({y:"0"}):({y:"100%"})} transition={{ease:"easeInOut",delay:index*.1}} className='inline-block ' >{item}</motion.span>
                ))}
                </h1>
                <div className='w-full h-full rounded-xl bg-green-400 overflow-hidden'>
                    <img  className="w-full h-full bg-cover" src='https://cdn.create.vista.com/api/media/small/54939973/stock-photo-beautiful-sunset-landscape' alt="" />
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Feature
