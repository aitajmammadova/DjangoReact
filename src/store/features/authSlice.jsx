import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("accessToken");

const initialState = {
  isAuthenticated: !!token,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
