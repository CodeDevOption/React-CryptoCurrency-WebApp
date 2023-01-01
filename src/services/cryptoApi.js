import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": "4390fc0da1mshd53c7c4ad7e5924p1c80a7jsnea8c46306b52",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // getCrypto: builder.query({
    //   query: () => createRequest("/coins"),
    // }),
  }),
});

export const {useGetCryptoQuery} = cryptoApi;
