import React from 'react'

function About() {
    return (
        <div className='w-full py-20 bg-[#68eace] rounded-t-3xl text-black px-20'>
            <h1 className='text-5xl  leading-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsa ipsum illo alias excepturi cum est, at, fugit dicta quos nam voluptas neque architecto iure commodi aspernatur laudantium, dolores deserunt.
            </h1>
            <div className='w-full border-t-[2px] mt-10 flex pt-5 border-[#2b6c63] '>
                <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach</h1>
                <button className=' flex items-center gap-2 uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
                </div>
                <div className='bg-[#a5fae7cb] w-1/2 h-[60vh] rounded-3xl object-contain'>
                    <img  className=" w-full h-full rounded-3xl object-cover" src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
