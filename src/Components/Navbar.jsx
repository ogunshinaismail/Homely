import React, { useState } from 'react'
import { Logo, CartIcon, Hamburger  } from '../Assets'
import Cart from './Cart';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showCart, setShowCart] = useState(false)
  return (
    <>
      <nav className="fixed top-0 w-full flex flex-wrap items-center justify-between py-3 bg-primary-50">

        <div className="container w-11/12 lg:w-10/12 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white" href="#home">
              <img src={Logo} alt="" />
            </a>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 w-[60px] border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={Hamburger} alt="" />
            </button>
          </div>

          <div className={"lg:flex flex-grow" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">

            <ul className="flex flex-col items-start lg:flex-row lg:items-center gap-5 list-none lg:ml-auto">
              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#home">
                  <span className="ml-2 font-medium">Home</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#home">
                  <span className="ml-2 font-medium">Why choose us</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#home">
                  <span className="ml-2 font-medium">Our dishes</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#home">
                  <span className="ml-2 font-medium">About us</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#home">
                  <span className="ml-2 font-medium">Testimonials</span>
                </a>
              </li>

              <li className="nav-item">
                <button 
                  className='bg-primary-500 flex items-center gap-2 py-1 px-5 rounded-lg outline-none' 
                  onClick={() => setShowCart(true)}
                >
                    <img src={CartIcon} alt="" />
                    <span className="text-white">Cart</span>
                    <div className="bg-white text-black font-bold py-1 px-3 rounded-full">3</div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showCart ? <Cart setShowCart={setShowCart} /> : null}
    </>
  );
}

export default Navbar