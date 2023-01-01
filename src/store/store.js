import { configureStore } from "@reduxjs/toolkit";
import { coinpaprikaApi } from "../services/coinpaprikaApi";
import { cryptoApi } from "../services/cryptoApi";

export const store = configureStore({
  reducer: {
    [coinpaprikaApi.reducerPath]: coinpaprikaApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      coinpaprikaApi.middleware,
      cryptoApi.middleware
    ),
});
