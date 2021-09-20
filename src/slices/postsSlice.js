import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../api";

const initialState = {
  data: [],
  status: "loading",
  error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await fetchPosts();
  return res.data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
