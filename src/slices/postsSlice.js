import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import * as api from "../api";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await api.fetchPosts();
  console.log(res.data);
  return res.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost) => {
    const res = await api.createPost(newPost);
    return res.data;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postId) => {
    const res = await api.updatePost(postId);
    console.log(res.data);
    return res.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    const res = await api.deletePost(postId);
    console.log(res.data);
    return res.data;
  }
);

export const likePost = createAsyncThunk("posts/likePost", async (postId) => {
  const res = await api.likePost(postId);
  console.log(res.data);
  return res.data;
});

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async (postId) => {
    const res = await api.dislikePost(postId);
    console.log(res.data);
    return res.data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsCleared: (state) => {
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder
      // FETCH ALL
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // CREATE
      .addCase(createPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(createPost.rejected, postsAdapter.addOne)
      // UPDATE
      .addCase(updatePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        // UPDATE
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // DELETE
      .addCase(deletePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.filter((post) => post._id === action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // LIKE
      .addCase(likePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(likePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // DISLIKE
      .addCase(dislikePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(dislikePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { postsCleared } = postsSlice.actions;

export const { selectAll: selectAllPosts, selectById: selectPostsById } =
  postsAdapter.getSelectors((state) => state.posts);

export default postsSlice.reducer;
