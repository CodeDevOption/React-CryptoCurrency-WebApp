import millify from "millify";
import React from "react";
const ExchangesCom = ({exchanges}) => {
  return (
    <a
      href={exchanges?.exchangeUrl}
      className="w-full sm:w-[49%] md:w-[24%] p-5 hover:shadow-md cursor-pointer bg-white dark:bg-secondary-dark-bg rounded-md"
    >
      <div className="flex gap-4 items-center">
        <h1 className="text-lg font-semibold dark:text-gray-100 text-dark-900 ">
          {exchanges?.rank}
        </h1>
        <h1 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {exchanges?.name}
        </h1>
      </div>
      <div className="flex flex-col gap-3 items-start my-5">
        <h1 className="text-sm dark:text-gray-200 text-gray-600">
          Percent Total Volume: {millify(exchanges?.percentTotalVolume)}
        </h1>
        <h1 className="text-sm dark:text-gray-200 text-gray-600">
          Volume Usd: {millify(exchanges?.volumeUsd)}
        </h1>
        <h1 className="text-sm dark:text-gray-200 text-gray-600">
          Trading Pairs: {millify(exchanges?.tradingPairs)}
        </h1>
      </div>
    </a>
  );
};

export default ExchangesCom;
