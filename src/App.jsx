import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ReactThemeToggleButton from "react-theme-toggle-button";
import { Footer, Navbar } from "./Components";
import "react-theme-toggle-button/dist/index.css";
import {
  CryptoCurrencies,
  CryptoDetails,
  Exchanges,
  Home,
  News,
} from "./Pages";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={`flex relative w-screen max-h-screen ${isDark && 'dark'} overflow-hidden`}>
      <div className="fixed top-4 right-10">
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
