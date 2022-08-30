import React from 'react'
import { AboutUp, AboutDown } from '../Assets'

const AboutUs = () => {
  return (
    <>
        <div className="w-10/12 mx-auto mt-[230px] mb-24 grid grid-cols-2">
            <div>
                <h1 className='font-bold text-5xl'>About Us</h1>
                <p className="w-11/12 leading-9 text-2xl mt-5">I make delicious healthy meals for busy people who want to enjoy home made food without the hassle of cooking. Why would you cook when you don't have to? The Hot Plate makes it easy to eat your favorite home cooked food anywhere you want. You deserve to eat great food, whether you're at home or on the go.</p>
                <button className='bg-primary-600 px-8 py-2 text-white rounded-md mt-5 text-lg'>See more</button>
            </div>
            <div className='relative flex justify-center'>
                <div className="absolute top-[-100px]">
                    {/* <div className="bg-primary-50 w-[230px] h-[400px]"></div> */}
                    <img src={AboutUp} alt="" className='w-[200px]' />
                </div>
                <div className="absolute bottom-0 right-[-.3rem]">
                    {/* <div className="bg-primary-50 w-[230px] h-[400px]"></div> */}
                    <img src={AboutDown} alt="" className='w-[200px]' />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs