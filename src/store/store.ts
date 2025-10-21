import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import portfolioSlice from "./slices/portfolioSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    portfolio: portfolioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
