import React, { useEffect, useState } from "react";
import { CryptoCurrency } from "../Components";
import { useGetCryptoQuery } from "../services/cryptoApi";

const CryptoCurrencies = () => {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useGetCryptoQuery();
  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredData);
    setCryptos(filteredData);
  }, [searchTerm]);

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        All Crypto Currencies
      </h1>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Search Cryptocurrency"
          className="p-2 w-full outline-none sm:w-1/3 dark:bg-secondary-dark-bg dark:text-gray-200"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-3 mt-5">
        {cryptos?.map((item) => (
          <CryptoCurrency currency={item} />
        ))}
      </div>
    </div>
  );
};

export default CryptoCurrencies;
