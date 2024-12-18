import { configureStore } from "@reduxjs/toolkit";
import { plannerReducer } from "./reducers";

export const store = configureStore({
  reducer: plannerReducer,
});