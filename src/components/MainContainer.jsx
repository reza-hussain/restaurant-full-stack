import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeContainer from "./HomeContainer";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from "./RowContainer";
import {useStateValue} from '../context/StateProvider';

const MainContainer = () => {
  const [{foodItems}, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState();

  useEffect(() => {

  }, [scrollValue])

  return (
    <div className="w-full h-auto overflow-x-hidden flex flex-col justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold text-gray-800 capitalize relative
          before:absolute before:rounded-lg before:content-around before:w-20 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
          >
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-200 cursor-pointer hover:bg-orange-500 transition-all ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-200 cursor-pointer hover:bg-orange-500 transition-all ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
               <MdChevronRight className="text-lg text-white" />
            </motion.div>
           
          </div>
        </div>

        <RowContainer scrollValue={scrollValue} flag={true} data={foodItems?.filter((items => items.category === 'fruits'))} /> 
      </section>
    </div>
  );
};

export default MainContainer;
