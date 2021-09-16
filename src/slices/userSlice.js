import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuthenticatedUser, login, logout, register } from "../api";

const initialState = {
  data: null,
  status: "loading",
  error: null,
};

export const fetchCurrentUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await fetchAuthenticatedUser();
  console.log(res.data);
  return res.data;
});

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials) => {
    const res = await login(credentials);
    return res.data;
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  await logout();
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (newUser) => {
    const res = await register(newUser);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
