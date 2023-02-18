import React from "react";

const CryptoState = ({ title, value }) => {
  return (
    <div className="md:w-[49%] w-[40%] bg-gray-50 hover:shadow-md flex flex-col gap-2 dark:bg-secondary-dark-bg rounded-xl p-5">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
        {title}
      </p>
      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-400">
        {value}
      </h1>
    </div>
  );
};

export default CryptoState;
