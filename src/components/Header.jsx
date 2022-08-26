import React from 'react';
import {MdShoppingBasket} from 'react-icons/md';
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";

import Logo from '../assets/hot.png';
import Avatar from '../assets/user.png';


const Header = () => { 
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);  
  }

  return (
    <header className="fixed z-50 w-screen p-5 px-16">
        {/* -----------Desktop and Tablet----------*/}
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} className="w-10 object-cover" alt="Logo" />
                <p className="text-red-500 text-xl font-bold">Slurp.</p>
            </Link>

            <div className="flex items-center gap-8 ">
                <ul className="flex items-center gap-8">
                    <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                    <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                    <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                    <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer">Services</li>
                </ul>

                <div className="relative flex items-center justify-center">
                    <MdShoppingBasket className="text-red-300 text-2xl ml-8 cursor-pointer" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">0</p>
                    </div>
                </div>

                <div className="relative">
                    <motion.img whileTap={{scale : 0.6}} src={Avatar} className="w-6 min-w-[28px] h-6 min-h-[28px] shadow-xl cursor-pointer" alt="userprofile" onClick={login}/>
                </div>
            </div>
        </div>
        {/* ---------- Mobile----------*/}
        <div className="flex md:hidden w-full h-full"></div>
    </header>
  )
}

export default Header