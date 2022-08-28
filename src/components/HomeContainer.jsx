import React from 'react'

import Delivery from "../assets/delivery-man.png";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">

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
        <p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-[#100F0F]">
          The Fastest Delivery in{" "}<br/>
          <span className="text-orange-400 text-[3rem] lg:text-[5rem]">Your City</span>
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
      <div className="bg-red-300 py-2 flex-1">
        
      </div>
    </section>
  )
}

export default HomeContainer