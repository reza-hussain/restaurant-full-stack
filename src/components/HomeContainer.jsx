import React from "react";

import Delivery from "../assets/delivery-man.png";
import heroBG from "../assets/heroBg.png";
import Icecream from "../assets/icecream.png";
import {heroData} from '../utils/data';

const HomeContainer = () => {
  
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-sm">
          <p className="text-sm text-orange-500 font-semibold">Bike Delivery</p>
          <div className="w-5 h-5 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-4 m-auto object-contain"
              alt="delivery-guy"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[3.7rem] font-bold tracking-wide text-[#100F0F]">
          The Fastest Delivery in <br />
          <span className="text-orange-400 text-[3rem] lg:text-[4.25rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-[#100f2f] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto
          px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={heroBG}
          className="ml-auto h-420 w-full lg:w-auto lg:h-510"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center  lg:px-16 justify-center py-4 gap-4 flex-wrap">
          { heroData && heroData.map(ele => (
            <div key={ele.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center flex-col shadow-lg">
              <img src={ele.imageSrc} className="w-20 lg:w-30 -mt-10 lg:-mt-15" alt="" />
              <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{ele.name}</p>
              <p className=" text-[10px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                {ele.des}
              </p>
              <p className="text-sm font-semibold text-gray-500">
                <span className="text-xs text-red-600">$</span>{ele.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
