// UserSlice.ts
import { createSlice } from "@reduxjs/toolkit";

type UserLoginType = {
  accessToken?: string;
  user?: UserType;
};

type UserType = {
  id: number;
  name: string;
  email: string;
  role: string;
  phone:string
};

const initialState: UserLoginType = {
  accessToken: undefined,
  user: undefined,
};

export const userLoginSlice = createSlice({
  name: "user_login",
  initialState,
  reducers: {
    userToken: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
      if (typeof window !== "undefined") {
        if (payload.accessToken) {
          localStorage.setItem("accessToken", payload.accessToken);
        }
        if (payload.user) {
          localStorage.setItem("user", JSON.stringify(payload.user));
        }
      }
    },
    UserStorage:(state)=>{
      if (typeof window !== "undefined") {
        state.accessToken = localStorage.getItem('accessToken')|| undefined
        const users = localStorage.getItem('user')
         if (users) {
          state.user = JSON.parse(users)
         }
      }
    },
    logOut:(state)=>{
      state.accessToken =undefined
      state.user = undefined
      if (typeof window!=='undefined') {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('user')
      }
    }
  },
});

export const { userToken,UserStorage, logOut} = userLoginSlice.actions;
export const reducer = userLoginSlice.reducer;
