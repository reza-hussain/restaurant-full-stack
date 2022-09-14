import React, { useEffect, useRef } from "react";
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion';
import NotFound from '../assets/NotFound.svg'

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])

  console.log(data)

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center my-12 gap-3 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap items-center justify-center" 
      }`}
    >
      {data && data.length > 0 ? (data.map((item) => (
        <div key={item.id}
        className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg p-2 my-12
        backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-center">

        <div className="w-full flex items-center justify-between">
            <motion.div whileHover={{scale:1.2}}
             className="w-32 h-32 -mt-12 drop-shadow-2xl">

              <img  src={item.imageUrl} alt="" 
              className="w-full h-full object-contain"/> 

            </motion.div>

            <motion.div 
            whileTap={{scale:0.75}}
            className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md">
              <MdShoppingBasket  className="text-white"/>
            </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">{item.title}</p>
          <p className="text-sm text-gray-500">{item.calories}</p>
          <div className="flex items-center">
            <p className="text-lg text-textColor font-semibold">
              <span className="text-sm text-red-600">$</span> {item.price}
            </p>
          </div>
        </div>
      </div>
      ))
      ) : (
        <div className="w-full flex items-center justify-center">
          <img src={NotFound} className="h-340" alt="" />
          <p className="text-xl text-black font-semibold my-2">
            Items Not Available</p>
      </div>
      )}
    </div>
  ); 
};

export default RowContainer;
 