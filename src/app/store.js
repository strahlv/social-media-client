import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../slices/postsSlice";
import usersReducer from "../slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});
