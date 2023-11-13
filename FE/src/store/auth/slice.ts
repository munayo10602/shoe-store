import { createSlice } from "@reduxjs/toolkit";
import { authAsyncAction } from "./action";
import { LoginUserType } from "./type";
import { ResponseType } from "../type";
import { useHistory } from "react-router-dom";

type AuthStateType = {
  isRegister: boolean;
  isLogin: boolean;
  response: ResponseType | undefined;
};

const initialState: AuthStateType = {
  isRegister: false,
  isLogin: false,
  response: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteResp: (state) => {
      state.response = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAsyncAction.login.pending, (state) => {
        state.isLogin = true;
      })
      .addCase(authAsyncAction.login.fulfilled, (state, action) => {
        localStorage.setItem("login-user", JSON.stringify({
          id: 1,
          fullName: "Nguyễn Ngọc Hà",
          username: "ngocha123",
          password: "ngocha123",
          email: "email1",
          phoneNum: 987654321,
          role: "User",
          address: "Van Phu",
          avatar:
            "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
          token: "abc",
        }))
        state.response = { message: "Success" };
        state.isLogin = false;
      })
      .addCase(authAsyncAction.login.rejected, (state) => {
        state.isLogin = false;
      });
    builder
      .addCase(authAsyncAction.register.pending, (state) => {
        state.isRegister = true;
      })
      .addCase(authAsyncAction.register.fulfilled, (state, action) => {
        // state.response = action.payload;
        state.response = { message: "Failled" };

        state.isRegister = false;
      })
      .addCase(authAsyncAction.register.rejected, (state) => {
        state.isRegister = false;
      });
  },
});

export const { deleteResp } = authSlice.actions;

export const authReducer = authSlice.reducer;
