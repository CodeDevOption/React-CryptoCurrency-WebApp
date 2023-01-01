import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/SVGs/Logo.svg";
import {
  AiOutlineBulb,
  AiOutlineFund,
  AiOutlineHome,
  AiOutlineMoneyCollect,
} from "react-icons/ai";
const Navbar = () => {
  const ActiveLink =
    "flex items-center gap-3 bg-blue-500 p-2 pl-4 font-semibold text-gray-200 dark:text-gray-200 rounded-sm";
  const NotActive =
    "flex items-center gap-3  p-2  font-semibold text-gray-900 dark:text-gray-200 rounded-sm";

  return (
    <div className="hidden md:block h-screen w-80 bg-gray-200 z-10 fixed md:sticky top-0 left-0 dark:bg-secondary-dark-bg p-5 pr-10">
      <div className="">
        <img src={logo} className="scale-75 md:scale-90" alt="Logo" />
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? ActiveLink : NotActive)}
        >
          <AiOutlineHome /> <span>Home</span>
        </NavLink>
        <NavLink
          to='cryptocurrencies'
          className={({ isActive }) => (isActive ? ActiveLink : NotActive)}
        >
          <AiOutlineFund /> <span>Cryptocurrencies</span>
        </NavLink>
        <NavLink
        to='exchanges'
          className={({ isActive }) => (isActive ? ActiveLink : NotActive)}
        >
          <AiOutlineMoneyCollect /> <span>Exchanges</span>
        </NavLink>
        <NavLink
        to='news'
          className={({ isActive }) => (isActive ? ActiveLink : NotActive)}
        >
          <AiOutlineBulb /> <span>News</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
