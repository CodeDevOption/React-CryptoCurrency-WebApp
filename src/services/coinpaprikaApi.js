import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const coinpaprikHeaders = {
        'X-RapidAPI-Key': '4390fc0da1mshd53c7c4ad7e5924p1c80a7jsnea8c46306b52',
        'X-RapidAPI-Host': 'coinpaprika1.p.rapidapi.com'
      }

const baseUrl = 'https://coinpaprika1.p.rapidapi.com';

const crateRequest = (url) => ({url,headers:coinpaprikHeaders});

export const coinpaprikaApi = createApi({
    reducerPath:'coinpaprikaApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://coinpaprika1.p.rapidapi.com'}),
    endpoints:(builder)=> ({
        // getCryptos: builder.query({
        //     query: () => crateRequest('/exchanges')
        // })
    })
})


export const {useGetCryptosQuery} = coinpaprikaApi;

