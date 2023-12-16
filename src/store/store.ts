import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/userReducers";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const store = configureStore({
  reducer: usersReducer,
});

export type RootState = ReturnType<typeof usersReducer>;

export default store;