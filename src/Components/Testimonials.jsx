import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonials'>
        <div className="w-11/12 lg:w-10/12 mx-auto my-24">
            <h1 className="text-primary-500 text-center font-bold text-4xl">Testimonials</h1>
            <p className="text-center text-md text-gray-700 lg:text-lg">This is what our client are saying</p>

            <div className="grid gap-9 mt-10 w-11/12 mx-auto md:w-9/12 lg:grid-cols-3 lg:w-full justify-center">
                <div>
                    <h1 className='text-2xl font-medium'>Paul James</h1>
                    <p className='font-medium'>Lagos state</p>
                    <p className='mt-4 text-[20px] lg:text-[17px] text-gray-700'>With a Homely Eats meal, you can serve delectable, home-cooked meals to your family and friends in any location, anytime. anyday!</p>
                </div>
                <div>
                    <h1 className='text-2xl font-medium'>Mercy jude</h1>
                    <p className='font-medium'>kogi state</p>
                    <p className='mt-4 text-[20px] lg:text-[17px] text-gray-700'>Be it a small gathering of friends or a large event with hundreds of people, you'll always be prepared. whether you're at home or on the go.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-medium'>Lara one</h1>
                    <p className='font-medium'>Imo state</p>
                    <p className='mt-4 text-[20px] lg:text-[17px] text-gray-700'>No need to worry about any of this anymore with your app. Homely Eats are made with the highest quality ingredients for you and your family.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials