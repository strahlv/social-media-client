import axios from "axios";

// const API = axios.create({ responseType: "json" });
const API = axios.create();
const USERS_URL = "/users";
const POSTS_URL = "/posts";

// Users
export const fetchUsers = () => API.get(USERS_URL);
export const register = (newUser) => API.post(USERS_URL, newUser);
export const login = (credentials) =>
  API.post(`${USERS_URL}/login`, credentials);
export const logout = () => API.post(`${USERS_URL}/logout`);
export const fetchAuthenticatedUser = () => API.get(`${USERS_URL}/me`);
export const fetchUser = (id) => API.get(`${USERS_URL}/${id}`);

// Posts
export const fetchPosts = () => API.get(POSTS_URL);
export const createPost = (newPost) => API.post(POSTS_URL, newPost);
export const updatePost = (postId) => API.put(`${POSTS_URL}/${postId}`);
export const deletePost = (postId) => API.delete(`${POSTS_URL}/${postId}`);
export const likePost = (postId) => API.patch(`${POSTS_URL}/${postId}/like`);
export const dislikePost = (postId) =>
  API.patch(`${POSTS_URL}/${postId}/dislike`);

// Comments
