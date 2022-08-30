import React from 'react'
import { Logo, Cart } from '../Assets'

const Navbar = () => {
  return (
    <>
        <nav className='bg-primary-50'>
            <div className="w-10/12 mx-auto flex items-center justify-between py-3">
                <img src={Logo} alt="" />
                <div className="flex items-center gap-5">
                    <div className="flex gap-5 items-center">
                        <p>Home</p>
                        <p>About us</p>
                        <p>Our products</p>
                        <p>Testimonials</p>
                        <p>Contact Us</p>
                    </div>
                    <button className='bg-primary-500 flex items-center gap-2 py-1 px-5 rounded-lg outline-none'>
                        <img src={Cart} alt="" />
                        <span className="text-white">Cart</span>
                        <div className="bg-white text-black font-bold py-1 px-3 rounded-full">3</div>
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar