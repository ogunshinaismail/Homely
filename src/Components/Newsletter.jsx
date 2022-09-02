import React from 'react'

const Newsletter = () => {
  return (
    <>
        <div className="w-10/12 mx-auto mb-10">
            <h1 className="text-4xl text-center font-bold">Subscribe to our Newsletter</h1>
            <p className="text-center text-md text-gray-700 lg:text-lg mt-2 md:text-lg">Enter your Email address to get daily offers and news</p>

            <div className="flex gap-2 justify-center mt-8">
                <input type="email" placeholder='Enter your Email' className='border border-gray-200 px-2 rounded-lg md:w-[40%] lg:w-[30%] outline-primary-600' />
                <button className="bg-primary-600 p-3 text-white text-lg rounded-lg">Subscribe</button>
            </div>
        </div>
    </>
  )
}

export default Newsletter