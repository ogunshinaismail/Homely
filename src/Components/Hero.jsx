import React from 'react'
import { HeroImg } from '../Assets'

const Hero = () => {
  return (
    <>
        <div className="w-10/12 mx-auto my-10 grid grid-cols-2 items-center">
            <div className='w-10/12'>
                <h1 className='font-semibold text-5xl text-black-100'>Enjoy <span className='text-primary-500'>home made meals</span> far away from home</h1>
                <p className='w-10/12 my-5'>Helping you enjoy confortable and health food anywhere and anytime on the go</p>
                <button className="bg-primary-600 font-semibold text-white rounded-lg py-2 px-7">Order</button>
            </div>
            
            <div className='w-10/12 mx-auto'>
                <img src={HeroImg} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero