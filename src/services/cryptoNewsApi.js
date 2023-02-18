import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const NewsHeaders = {
  "X-RapidAPI-Key": "4390fc0da1mshd53c7c4ad7e5924p1c80a7jsnea8c46306b52",
  "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: NewsHeaders });

const baseUrl = "https://crypto-news16.p.rapidapi.com";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoApiNews",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest("/news/top/10"),
    }),
    getAllNews: builder.query({
        query: ()=> createRequest("/news/all") ,
    })
  }),
});
export const { useGetNewsQuery,useGetAllNewsQuery } = cryptoNewsApi;
