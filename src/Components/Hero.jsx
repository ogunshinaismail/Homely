import React, { useState, useEffect } from "react";
import { HeroImg } from "../Assets";
import { useAuthContext } from "../Hooks/useAuthContext";

const Hero = () => {
  const { user } = useAuthContext();

  return (
    <div id="home">
      <div className="w-11/12 mx-auto my-32 flex flex-col gap-6 lg:grid grid-cols-2 items-center lg:w-10/12">
        <div className="w-11/12">
          {user && (
            <div className="py-4 block lg:hidden">
              <h4 className="text-black-200 text-2xl mb-8 font-bold">
                Welcome <span className="italic">{user.email}</span>
              </h4>
            </div>
          )}
          <h1 className="font-medium text-[35px] md:text-5xl text-black-100 md:leading-[60px]">
            Enjoy <span className="text-primary-600">home made meals</span> far
            away from home
          </h1>
          <p className="w-11/12 my-5 text-xl text">
            Helping you enjoy confortable and health food anywhere and anytime
            on the go
          </p>
          <button className="bg-primary-600 text-xl text-white rounded-lg py-2 px-7">
            Order Now
          </button>
        </div>

        <div className="w-10/12 mx-auto">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
