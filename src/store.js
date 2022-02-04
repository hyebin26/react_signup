import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterSlice";
import postReducer from "./feature/post/postSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    post: postReducer,
  },
});
