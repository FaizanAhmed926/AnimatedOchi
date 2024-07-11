import React from 'react'

function Navbar() {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
      <div className='logo  text-[#2f858b] text-4xl font-medium tracking-tighter'>
       Ochi
      </div>
      <div className="links flex gap-10">
        <a className=' capitalize font-light ' href="#">Service</a>
        <a className=' capitalize font-light ' href="#">Our Works</a>
        <a className=' capitalize font-light ' href="#">About Us</a>
        <a className=' capitalize font-light ' href="#">Insights</a>
        <a className=' capitalize font-light ml-32'  href="#">Contact</a>
      </div>
      
    </div>
  )
}

export default Navbar
