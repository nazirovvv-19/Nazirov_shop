import { configureStore, createSlice } from "@reduxjs/toolkit";
import { cartReducer } from "./slice/CartSlice";
import { likeSlice } from "./slice/LikedSlice";
import { userLoginSlice } from "./slice/UserSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer.reducer,
    like: likeSlice.reducer,
    userToken: userLoginSlice.reducer,
  },
});
