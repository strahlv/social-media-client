import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";
import { delay } from "../utils";

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchAuthenticatedUser = createAsyncThunk(
  "user/fetchAuthenticatedUser",
  async () => {
    // Fake delay
    await delay(1000);

    const res = await api.fetchAuthenticatedUser();
    return res.data;
  }
);

export const login = createAsyncThunk("user/login", async (credentials) => {
  const res = await api.login(credentials);
  return res.data;
});

export const logout = createAsyncThunk("user/logout", async () => {
  await api.logout();
});

export const register = createAsyncThunk("user/register", async (newUser) => {
  const res = await api.register(newUser);
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthenticatedUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuthenticatedUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAuthenticatedUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state = {
        //   data: null,
        //   status: "idle",
        //   error: null,
        // };
        state.data = null;
        state.status = "idle";
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
