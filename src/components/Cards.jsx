import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className="cardcontainer h-[50vh] w-1/2 ">
        <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
      <span className=' text-yellow-200 text-6xl tracking-tighter font-semibold'>Ochi</span>
      <button className=' absolute px-5 py-1 left-10 bottom-10 border-2 rounded-3xl'>2024-2025</button>
        </div>
      </div>
      <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">
      <div className='CARD rounded-xl w-1/2 h-full bg-[#192826]'>
      <div className='card relative rounded-xl w-full h-full flex items-center justify-center'>
      <span className=' text-yellow-100 text-6xl tracking-tighter font-normal'>Clutch</span>
      <button className=' absolute px-5 py-1 left-10 bottom-10 border-2 rounded-3xl'>Bussiness</button>
        </div>
      </div>
      <div className='CARD rounded-xl w-1/2 h-full bg-[#192826]'>
      <div className='card relative rounded-xl w-full h-full flex items-center justify-center '>
      <span className=' text-yellow-100 text-6xl tracking-tighter font-normal'>Content</span>
      <button className=' absolute px-5 py-1 left-10 bottom-10 border-2 rounded-3xl'>Rating</button>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Cards
