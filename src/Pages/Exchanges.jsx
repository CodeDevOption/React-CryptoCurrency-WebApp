import React from "react";
import ExchangesCom from "../Components/ExchangesCom";
import { cryptoExchanges } from "../constants/cryptoExchanges";

const Exchanges = () => {
  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 ">
        Exchanges
      </h1>
      <div className="flex flex-wrap gap-3 mt-5">
        {cryptoExchanges?.map((item) => (
          <ExchangesCom exchanges={item} />
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
