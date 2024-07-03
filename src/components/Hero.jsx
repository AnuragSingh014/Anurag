import React from 'react'

export const Hero = () => {
  return (
    <div className='bg-custom-bg w-max-screen overflow-x-hidden overflow-clip'>

      <div className="h-screen w-screen">
        <img src="/assets/lNight2.png" alt="Description of Image" className="h-full w-screen object-cover" /> 
      </div>

      <div className='flex items-center justify-center w-max-screen overflow-hidden'>
        <div className='flex flex-col items-center justify-center'>
          <img src="/assets/rwh2.png" alt="Description of Image" className="w-[20vw]"/>
          <img src="/assets/rwh2.png" alt="Description of Image" className="w-[20vw]"/>
        </div>
        <img src="/assets/m.png" alt="Description of Image" className="w-1/2"/>
        <div className='flex flex-col items-center justify-center'>
          <img src="/assets/rwh2.png" alt="Description of Image" className="w-[20vw]"/>
          <img src="/assets/rwh2.png" alt="Description of Image" className="w-[20vw]"/>
        </div>
      </div>

    </div>
  )
}
