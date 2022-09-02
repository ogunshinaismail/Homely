import React from 'react'
import { PlayStore, AppStore, MobileApp } from '../Assets'

const GetOurApp = () => {
  return (
    <>
        <div className="w-11/12 lg:w-10/12 mx-auto my-24">
            <h1 className="text-primary-500 text-center font-bold text-4xl">Get our mobile app</h1>
            <p className="text-center text-md text-gray-700 lg:text-lg">Enjoy better experience</p>

            <div className="grid gap-8 lg:grid-cols-2 lg:mt-16">
                <div className='mt-5'>
                    <p className="text-xl lg:text-2xl">With our app, you never have to settle for unhealthy, expensive takeaway food again. From spicy noodles to fresh salads, we'll deliver anywhere in your city. Get tasty meals in just 30 minutes. It's simple. We make it easy for you to make smart business decisions fast. Whether you have a busy schedule or just enjoy home-cooked food,</p>
                    <div className="flex gap-5 justify-center items-center md:justify-start mt-6">
                        <img src={AppStore} alt="" className='w-[125px]' />
                        <img src={PlayStore} alt="" className='w-[150px]' />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <img src={MobileApp} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default GetOurApp