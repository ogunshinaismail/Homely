import React from 'react'

const Counter = () => {
  return (
    <>
        <div className="flex flex-col gap-10 items-center justify-center mt-24 text-center md:flex-row md:gap-7">
            <div className="flex flex-col gap-5 text-center md:gap-2">
                <h1 className='font-bold text-3xl'>500+</h1>
                <p className="text-gray-500 font-medium text-lg md:text-xs">Food partners</p>
            </div>
            <div className="flex flex-col gap-5 text-center md:gap-2">
                <h1 className='font-bold text-3xl'>1k+</h1>
                <p className="text-gray-500 font-medium text-lg md:text-xs">orders delivered</p>
            </div>
            <div className="flex flex-col gap-5 text-center md:gap-2">
                <h1 className='font-bold text-3xl'>12k+</h1>
                <p className="text-gray-500 font-medium text-lg md:text-xs">Clients</p>
            </div>
        </div>
    </>
  )
}

export default Counter