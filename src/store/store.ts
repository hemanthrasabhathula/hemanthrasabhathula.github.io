import { configureStore } from "@reduxjs/toolkit";
import { navSlice, portfolioSlice } from "./slices";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    portfolio: portfolioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
