import React from 'react'
import { AboutImg } from '../Assets'

const AboutUs = () => {
  return (
    <>
        <div className="w-10/12 mx-auto my-24 grid grid-cols-2 items-end">
            <div>
                <h1 className='font-bold text-5xl'>About Us</h1>
                <p className="w-11/12 leading-9 text-2xl mt-5">I make delicious healthy meals for busy people who want to enjoy home made food without the hassle of cooking. Why would you cook when you don't have to? The Hot Plate makes it easy to eat your favorite home cooked food anywhere you want. You deserve to eat great food, whether you're at home or on the go.</p>
                <button className='bg-primary-600 px-8 py-2 text-white rounded-md mt-5 text-lg'>See more</button>
            </div>
            <div className='flex justify-center'>
                <img src={AboutImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default AboutUs