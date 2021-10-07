import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import * as api from "../api";
import { delay } from "../utils";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = postsAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  // Fake delay
  await delay(1000);

  const res = await api.fetchPosts();
  return res.data;
});

export const fetchUserPosts = createAsyncThunk(
  "posts/fetchUserPosts",
  async (userId) => {
    // Fake delay
    await delay(1000);

    const res = await api.fetchUserPosts(userId);
    return res.data;
  }
);

export const fetchPost = createAsyncThunk("posts/fetchPost", async (postId) => {
  const res = await api.fetchPost(postId);
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
  async ({ postId, updatedPost }) => {
    const res = await api.updatePost(postId, updatedPost);
    delete res.data.author;
    delete res.data.comments;
    return res.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    const res = await api.deletePost(postId);
    return res.data._id;
  }
);

export const likePost = createAsyncThunk("posts/likePost", async (postId) => {
  const res = await api.likePost(postId);
  delete res.data.author;
  delete res.data.comments;
  return res.data;
});

export const dislikePost = createAsyncThunk(
  "posts/dislikePost",
  async (postId) => {
    const res = await api.dislikePost(postId);
    delete res.data.author;
    delete res.data.comments;
    return res.data;
  }
);

export const createComment = createAsyncThunk(
  "posts/createComment",
  async ({ postId, newComment }) => {
    const res = await api.createComment(postId, newComment);
    return res.data;
  }
);

export const deleteComment = createAsyncThunk(
  "posts/deleteComment",
  async ({ postId, commentId }) => {
    const res = await api.deleteComment(postId, commentId);
    return res.data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsCleared: (state) => {
      postsAdapter.removeAll(state);
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      // FETCH AUTHENTICATED USER'S POSTS
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
        postsAdapter.removeAll(state);
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // FETCH USER'S POSTS
      .addCase(fetchUserPosts.pending, (state, action) => {
        state.status = "loading";
        postsAdapter.removeAll(state);
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchUserPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // CREATE
      .addCase(createPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // FETCH ONE
      .addCase(fetchPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // UPDATE
      .addCase(updatePost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertOne(state, action.payload);
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
        postsAdapter.removeOne(state, action.payload);
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
      })
      // CREATE COMMENT
      .addCase(createComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(createComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // DELETE COMMENT
      .addCase(deleteComment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { postsCleared } = postsSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostsIds,
} = postsAdapter.getSelectors((state) => state.posts);

export const selectPostsStatus = (state) => state.posts.status;

export default postsSlice.reducer;
