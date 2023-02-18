import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ReactThemeToggleButton from "react-theme-toggle-button";
import { Footer, Navbar } from "./Components";
import "react-theme-toggle-button/dist/index.css";
import { changeState } from "./store/reducers/menuButton";
import {
  CryptoCurrencies,
  CryptoDetails,
  Exchanges,
  Home,
  News,
} from "./Pages";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from "react-redux";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex relative w-screen max-h-screen ${
        isDark && "dark"
      } overflow-hidden`}
    >
      <div
        onClick={() => dispatch(changeState())}
        className="fixed cursor-pointer sm:hidden w-14 h-14 bg-blue-700 z-20 rounded-full bottom-2 left-2 flex items-center justify-center"
      >
        <AiOutlineMenu className="text-white text-xl" />
      </div>

      <div className="fixed top-4 z-20 right-10">
        <ReactThemeToggleButton
          isDark={isDark}
          onChange={() => setIsDark((prevIsDark) => !prevIsDark)}
        />
      </div>
      <Navbar />
      <div className="flex-1 overflow-y-auto bg-blue-50 dark:bg-main-dark-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
