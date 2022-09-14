import React, { useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import { categories } from '../utils/data'

const MenuContainer = () => {
  const [filter, setFilter] = useState('chicken');


  return (
    <section  className="w-full my-6 flex" id="menu">
        <div className="w-full flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold text-gray-800 capitalize relative
          before:absolute before:rounded-lg before:content-around before:w-16 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
            Our Hot Dishes
            </p>

            <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {categories && categories.map(category => (
                  <div key={category.id} className="group bg-card w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col
                  gap-3 items-center justify-center hover:bg-red-600 duration-150 transition-all ease-in">
                    <div className="w-10 h-10 rounded-full bg-red-600 group-hover:bg-card flex items-center justify-center">
                        <IoFastFood className="text-card group-hover:text-textColor text-lg" />
                    </div>
  
                    <p className=" text-sm text-textColor group-hover:text-cardColor">
                        {category.name}
                    </p>
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MenuContainer