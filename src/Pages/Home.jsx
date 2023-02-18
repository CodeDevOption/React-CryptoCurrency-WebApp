import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import { CryptoCurrency, CryptoNews, CryptoState } from "../Components";
import { useGetNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptoQuery } from "../services/cryptoApi";
import Loading from "../Components/Loading";

const Home = () => {
  const { data } = useGetCryptoQuery();
  const { data: cryptoNews, isLoading } = useGetNewsQuery();
  const globalStatus = data?.data?.stats;

  if (isLoading) return <Loading />;

  return (
    <div className="p-5">
      <div className="">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
          Global Crypto State
        </h1>
        <div className="flex flex-wrap gap-3 mt-5">
          <CryptoState
            title="Total Cryptocurrencies"
            value={millify(globalStatus?.total)}
          />
          <CryptoState
            title="Total Exchanges"
            value={millify(globalStatus?.totalExchanges)}
          />
          <CryptoState
            title="Total Total Market Cap"
            value={millify(globalStatus?.totalMarketCap)}
          />
          <CryptoState
            title="Total 24 Volume"
            value={millify(globalStatus?.total24hVolume)}
          />
          <CryptoState
            title="Total Markets"
            value={millify(globalStatus?.totalMarkets)}
          />
        </div>
      </div>
      {/* Top 10 Crypto */}
      <div className="mt-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
            Top 10 Cryptos In The World
          </h1>
          <Link to="/cryptocurrencies">
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-300 cursor-pointer">
              Show More...
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          {data?.data?.coins?.slice(0, 10).map((item) => (
            <CryptoCurrency currency={item} />
          ))}
        </div>
      </div>
      {/* Latest News */}
      <div className="mt-5">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
            Latest Crypto News
          </h1>
          <Link to="/news">
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-300 cursor-pointer">
              Show More...
            </p>
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          {cryptoNews?.map((item) => (
            <CryptoNews news={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
