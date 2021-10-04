import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import * as api from "../api";
import { delay } from "../utils";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState({
  currentUser: null,
  status: "loading",
  error: null,
});

export const fetchAuthenticatedUser = createAsyncThunk(
  "user/fetchAuthenticatedUser",
  async () => {
    // Fake delay
    // await delay(1000);

    const res = await api.fetchAuthenticatedUser();
    return res.data;
  }
);

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  // Fake delay
  // await delay(1000);

  const res = await api.fetchUser(userId);
  return res.data;
});

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
      // ************************************************************
      // FETCH AUTHENTICATED USER
      // ************************************************************
      .addCase(fetchAuthenticatedUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuthenticatedUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.currentUser = action.payload._id;
        usersAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchAuthenticatedUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // ************************************************************
      // FETCH ONE USER
      // ************************************************************
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        usersAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // ************************************************************
      // LOGIN
      // ************************************************************
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.currentUser = action.payload._id;
        usersAdapter.upsertOne(state, action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // ************************************************************
      // LOGOUT
      // ************************************************************
      .addCase(logout.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.currentUser = null;
        usersAdapter.removeOne(state, action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // ************************************************************
      // CREATE USER / REGISTER
      // ************************************************************
      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.currentUser = action.payload;
        usersAdapter.addOne(state, action.payload);
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
} = usersAdapter.getSelectors((state) => state.users);

export const selectUsersState = (state) => state.users;
export const selectCurrentUserId = (state) => state.users.currentUser;

export default userSlice.reducer;
