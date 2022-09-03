import React from 'react'
import { Logo } from '../Assets'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, Facebook } from '../Assets'

const Footer = () => {
  return (
    <>
        <div className="bg-[#FF9466] py-16 relative">
            <div className="w-11/12 mx-auto grid gap-8 md:w-10/12 lg:grid-cols-3 lg:justify-center">
                <div>
                    <img src={Logo} alt="" />
                    <p className='text-white w-10/12 md:w-8/12 mt-6 lg:w-full lg:mt-4 gap-2'>Solution for easy and flexible getting meals for the household.You can trust us anywhere through this platform</p>
                    <p className='text-white mt-4 hidden lg:block'>©2022 Made with  by Ismail and Muiz</p>
                </div>
                <div className='lg:relative flex flex-col lg:items-center'>
                    <h1 className="text-3xl font-medium text-white lg:absolute lg:left-[6.7rem] ">About</h1>
                    <div className="mt-5 lg:mt-12 flex flex-col gap-4">
                        <Link to="/" className='text-white'>Our Company</Link>
                        <Link to="/" className='text-white'>Career</Link>
                        <Link to="/" className='text-white'>Investor Relations</Link>
                        <Link to="/" className='text-white'>Social Impact</Link>
                    </div>
                </div>
                <div className='flex flex-col lg:items-center'>
                    <h1 className="text-3xl font-medium text-white">Social</h1>
                    <div className="flex gap-8 mt-4 lg:flex-col ">
                        <img src={Instagram} alt="" className='w-[23px]' />
                        <img src={Twitter} alt="" className='w-[23px]' />
                        <img src={Facebook} alt="" className='w-[18px]' />
                    </div>
                </div>
            </div>
            <p className='text-center text-md text-white mt-16 block lg:hidden'>©2022 Made with  by Ismail and Muiz</p>
        </div>
    </>
  )
}

export default Footer