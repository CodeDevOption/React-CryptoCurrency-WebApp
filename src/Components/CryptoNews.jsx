import React from "react";

const CryptoNews = ({ news }) => {
  return (
    <a
      href={news?.url}
      className="relative w-full sm:w-[49%] md:w-[24%] p-5 hover:shadow-md cursor-pointer bg-white dark:bg-secondary-dark-bg rounded-md "
      target="_blank"
    >
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ">
       {news?.title}
      </h1>
      <div className="flex flex-col gap-3 items-start my-5 ">
        <p className="text-sm text-gray-900 dark:text-gray-100">
          {news?.description.length > 100
            ? news?.description.slice(0, 100) + "..."
            : news?.description}
        </p>
      </div>
      <p className="text-xs text-gray-900 dark:text-gray-100 absolute bottom-2 right-2 flex justify-end items-end">{news.date}</p>
    </a>
  );
};

export default CryptoNews;
