import React, { useEffect, useRef, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);
    const [outerRotate, setOuterRotate] = useState(90)
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
            if ((angle >= 0 && angle < 90) || (angle > 270 && angle < 360))
                setOuterRotate(0)
            else if (angle > 90 && angle < 270)
                setOuterRotate(180)
            else if (angle == 90)
                setOuterRotate(90)
            else
                setOuterRotate(270)
        })
    })
    return (
        <div className='eyes w-full h-screen bg-slate-500 flex items-center justify-center overflow-hidden'>
            <div data-scroll data-scroll-speed="-0.5" className='relative flex items-center justify-center w-[55%] rounded-3xl h-2/3 object-contain  bg-cover bg-[url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600")]'>
                <div className='rounded-3xl  flex gap-10  bg-cover '>
                    <div className=' relative w-[13vw]  h-[13vw] rounded-full bg-zinc-100'>
                        <div className="outerLine absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[75%] h-2/3 " style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                            <div className='  flex justify-center items-center h-full w-[88%] bg-black rounded-full'>
                                <div style={{ transform: ` rotate(${rotate}deg)` }} className='line w-full h-10'>
                                    <div className='w-8 h-8 bg-white rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' relative w-[13vw]  h-[13vw] rounded-full bg-zinc-100'>
                        <div className="outerLine absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[75%] h-2/3 " style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}>
                            <div className='  flex justify-center items-center h-full w-[88%] bg-black rounded-full'>
                                <div style={{ transform: ` rotate(${rotate}deg)` }} className='line w-full h-10'>
                                    <div className=' w-8 h-8 bg-white rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Eyes
