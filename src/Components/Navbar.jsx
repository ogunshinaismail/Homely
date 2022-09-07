import React, { useState } from "react";
import { Logo, CartIcon, Hamburger, User } from "../Assets";
import Cart from "./Cart";
import { CartState } from "../Context/Context";
import { useLogout } from "../Hooks/useLogout";
import { useAuthContext } from "../Hooks/useAuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {
    state: { cart },
  } = CartState();

  const { logout } = useLogout();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navlogOut, setNavLogout] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    setNavLogout(false);
  };
  return (
    <>
      <nav className="fixed top-0 w-full flex flex-wrap items-center justify-between py-3 bg-primary-50">
        <div className="container w-11/12 lg:w-10/12 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
              href="#home"
            >
              <img src={Logo} alt="" />
            </a>

            <div className="flex gap-2 items-center">
              <button
                className="bg-primary-600 flex items-center gap-2 py-1 px-5 rounded-lg outline-none lg:hidden"
                onClick={() => setShowCart(true)}
              >
                <img src={CartIcon} alt="" />
                <span className="text-white">Cart</span>
                <div className="bg-pink-50 text-black font-bold py-1 px-3 rounded-full">
                  {cart.length}
                </div>
              </button>

              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 w-[60px] border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <img src={Hamburger} alt="" />
              </button>
            </div>
          </div>

          <div
            className={"lg:flex flex-grow" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-start lg:flex-row lg:items-center gap-5 list-none lg:ml-auto">
              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#home">
                  <span className="ml-2 font-medium">Home</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#whychooseus">
                  <span className="ml-2 font-medium">Why choose us</span>
                </a>
              </li>

              {user && (
                <li className="nav-item">
                  <a className="text-black hover:opacity-75" href="#home">
                    <span className="ml-2 font-medium">Our dishes</span>
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#about">
                  <span className="ml-2 font-medium">About us</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="text-black hover:opacity-75" href="#testimonials">
                  <span className="ml-2 font-medium">Testimonials</span>
                </a>
              </li>
              {user && (
                <li className="nav-item">
                  <button
                    className="bg-primary-600 flex items-center gap-2 py-1 px-5 rounded-lg outline-none"
                    onClick={() => setShowCart(true)}
                  >
                    <img src={CartIcon} alt="" />
                    <span className="text-white">Cart</span>
                    <div className="bg-pink-50 text-black font-bold py-1 px-3 rounded-full">
                      {cart.length}
                    </div>
                  </button>
                </li>
              )}
              {user && (
                <li className="nav-item lg:block hidden mr-8">
                  <img
                    src={User}
                    alt="user"
                    className="h-10 w-10 cursor-pointer"
                    onClick={() => setNavLogout(!navlogOut)}
                  />
                  {navlogOut && (
                    <div className="text-center w-28 h-10 bg-white absolute mt-4 shadow-md rounded flex justify-center items-center">
                      <p
                        className="text-center flex justify-center items-center cursor-pointer text-black"
                        onClick={handleClick}
                      >
                        Logout
                      </p>
                    </div>
                  )}
                </li>
              )}
              {user && (
                <li className="nav-item float-right lg:hidden block mr-8">
                  <p
                    className="text-lg text-black cursor-pointer"
                    onClick={handleClick}
                  >
                    Logout
                  </p>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="text-black hover:opacity-75" to={"/signin"}>
                    <button className=" font-medium lg:bg-primary-600 lg:py-2 lg:px-6 lg:rounded-lg lg:text-white">
                      Login
                    </button>
                  </Link>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="text-black hover:opacity-75" to={"/signup"}>
                    <button className=" font-medium lg:bg-primary-600 lg:py-2 lg:px-6 rounded-lg lg:text-white">
                      Register
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {showCart ? <Cart setShowCart={setShowCart} /> : null}
    </>
  );
};

export default Navbar;
