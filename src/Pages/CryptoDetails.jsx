import millify from "millify";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../Components";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data: cryptoDetails } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetail = cryptoDetails?.data?.coin;
  return (
    <div className="p-5">
      <div className="flex gap-5 items-center">
        <a href={cryptoDetail?.links[0]?.url} target={"_blank"}>
          <img src={cryptoDetail?.iconUrl} alt="Icon" width={50} height={50} />
        </a>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {cryptoDetail?.name}
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        <CryptoState
          title="Crypto Currency Rank"
          value={
            parseInt(cryptoDetail?.rank) < 10
              ? "0" + cryptoDetail?.rank
              : cryptoDetail?.rank
          }
        />
        <CryptoState
          title="24h Volume"
          value={millify(cryptoDetail ? cryptoDetail["24hVolume"] : 0)}
        />
        <CryptoState
          title="MarketCap"
          value={millify(cryptoDetail ? cryptoDetail["marketCap"] : 0)}
        />
        <CryptoState
          title="Price of one Coin"
          value={millify(cryptoDetail ? cryptoDetail["price"] : 0)}
        />
      </div>

      <h2 className="mt-5 text-xl my-5 font-semibold text-gray-900 dark:text-gray-100">
        What is {cryptoDetail?.name} ?
      </h2>
      <div
        className="cryptoDesc"
        dangerouslySetInnerHTML={{ __html: cryptoDetail?.description }}
      ></div>
    </div>
  );
};

export default CryptoDetails;
