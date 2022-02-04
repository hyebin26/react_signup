import { configureStore } from "@reduxjs/toolkit";
import faceReducer from "./faceSlice";

export const faceStore = configureStore({
  reducer: { message: faceReducer },
});
