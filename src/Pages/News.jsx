import React, { useEffect, useState } from "react";
import { CryptoNews } from "../Components";
import { useGetAllNewsQuery } from "../services/cryptoNewsApi";
const News = () => {
  const { data: cryptoNews, isLoading } = useGetAllNewsQuery();
  const [News,setCryptoNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(isLoading);
  console.log(cryptoNews);
  useEffect(()=>{
    const filterNews = cryptoNews?.coindesk?.filter((news) => news?.title?.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptoNews(filterNews);
  },[searchTerm,cryptoNews]);
  
  console.log(News);
  return (
  <div className="p-5">
  <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
    All Crypto News
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
    {News?.map((item) => (
      <CryptoNews news={item} />
    ))}
  </div>
</div>
)
};

export default News;
