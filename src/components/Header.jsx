import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase.config";

import Logo from "../assets/hot.png";
import Avatar from "../assets/user.png";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow }, dispatch] = useStateValue(); //Custom hook in State provider.js

  const [isMenu, setMenu] = useState(false); //Toggling the profile menu to open and close
  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider); //fetching refreshtoken and provider data from google
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });

      localStorage.setItem("user", JSON.stringify(providerData[0])); //Pushing data into local storage
    } else {
      setMenu(!isMenu);
    }
  };

  const logOut = () => {
    setMenu(false);
    localStorage.clear();

    dispatch({
        type: actionType.SET_USER,
        user: null
    });
  }

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow : !cartShow
    })
  }

  return (
    <header className="fixed z-50 w-screen p-4 px-6 md:p-5 md:px-16 bg-gray-50">
      {/* -----------Desktop and Tablet----------*/}
      {/* ================= LOGO REGION ======================= */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="Logo" />
          <p className="text-red-500 text-xl font-bold">Slurp.</p>
        </Link>

        {/* ================= LINKS REGION ======================= */}
        <div className="flex items-center gap-8 ">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setMenu(false)}>
              Home
            </li>
            <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setMenu(false)}>
              Menu
            </li>
            <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setMenu(false)}>
              About Us
            </li>
            <li className="text-base text-red-300 hover:text-red-400 duration-100 transition-all ease-in-out cursor-pointer"
            onClick={() => setMenu(false)}>
              Services
            </li>
          </motion.ul>
          {/* ================= SHOPPING CART AND PROFILE REGION ======================= */}
          <div className="relative flex items-center justify-center" onClick={showCart}>
            <MdShoppingBasket className="text-red-300 text-2xl ml-8 cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">0</p>
            </div>
          </div>
          {/* ================= PROFILE (SHOPPING CART IS ABOVE) ======================= */}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w-[28px] h-8 min-h-[28px] shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
              referrerPolicy="no-referrer"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-36 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-10 right-0"
              >
                {user && user.email === "alirezaa08@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-300
                            transition-all duration-100 ease-in-out"
                       onClick={() => setMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-300
                    transition-all duration-100 ease-in-out"
                    onClick={logOut}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* ==================== MOBILE===========================*/}
      
      <div className="flex items-center justify-between md:hidden w-full h-full">
        {/* ================= CART REGION ======================= */}
        <div className="relative flex items-center justify-center" onClick={showCart}>
            <MdShoppingBasket className="text-red-300 text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center">
              <p className="text-xs text-white font-semibold">0</p>
            </div>
          </div>
        {/* ================= LOGO REGION ======================= */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="Logo" />
          <p className="text-red-500 text-xl font-bold">Slurp.</p>
        </Link>
        {/* ================= PROFILE REGION ======================= */}
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[28px] h-10 min-h-[28px] shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-36 bg-gray-100 shadow-xl rounded-lg flex flex-col absolute top-10 right-0"
            >
              {user && user.email === "alirezaa08@gmail.com" && (
                <Link to={"/createItem"}>
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-300
                            transition-all duration-100 ease-in-out"
                  >
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              
              <ul className="flex flex-col"
              >
                <li className="text-base px-4 py-2 hover:bg-red-300 duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setMenu(false)}>
                  Home
                </li>
                <li className="text-base px-4 py-2 hover:bg-red-300 duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setMenu(false)}>
                  Menu
                </li>
                <li className="text-base px-4 py-2 hover:bg-red-300 duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setMenu(false)}>
                  About Us
                </li>
                <li className="text-base px-4 py-2 hover:bg-red-300 duration-100 transition-all ease-in-out cursor-pointer"
                onClick={() => setMenu(false)}>
                  Services
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md px-4 py-2 flex items-center justify-center gap-3 cursor-pointer bg-red-400
                transition-all duration-100 ease-in-out"
                onClick={logOut}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
