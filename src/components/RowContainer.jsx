import React, { useEffect, useRef } from "react";
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion';

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue])

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center my-12 gap-3 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap" 
      }`}
    >
      {data && data.map(item => (
        <div key={item.id} className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
            <motion.img whileHover={{scale:1.2}} src="https://firebasestorage.googleapis.com/v0/b/restaurant-full--stack.appspot.com/o/Images%2F1662810404600-c1.png?alt=media&token=7abb23f3-68f4-4b14-b0e6-77e786a582ae" alt="" 
            className="w-40 -mt-16 drop-shadow-2xl"/>
            <motion.div 
            whileTap={{scale:0.75}}
            className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md">
              <MdShoppingBasket  className="text-white"/>
            </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-textColor font-semibold text-base md:text-lg">Chicken Gravy</p>
          <p className="text-sm text-gray-500">45 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-textColor font-semibold">
              <span className="text-sm text-red-600">$</span> 5.2
            </p>
          </div>
        </div>
      </div>
      ))}

    </div>
  );
};

export default RowContainer;
