import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import portfolioSlice from "./portfolioSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    portfolio: portfolioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
