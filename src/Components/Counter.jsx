import React from 'react'

const Counter = () => {
  return (
    <>
        <div className="flex items-center justify-center mt-24 text-center gap-7">
            <div className="flex-flex-col text-center">
                <h1 className='font-bold text-3xl'>500+</h1>
                <p className="text-gray-400 text-xs">Food partners</p>
            </div>
            <div className="flex-flex-col text-center">
                <h1 className='font-bold text-3xl'>1k+</h1>
                <p className="text-gray-400 text-xs">orders delivered</p>
            </div>
            <div className="flex-flex-col text-center">
                <h1 className='font-bold text-3xl'>12k+</h1>
                <p className="text-gray-400 text-xs">Clients</p>
            </div>
        </div>
    </>
  )
}

export default Counter