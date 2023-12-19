import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/userReducers";
import { modalReducer } from "./reducers/modalReducer";
import { loadingReducer } from "./reducers/loadingReducer";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const store = configureStore({
  reducer: {
  user:  usersReducer,
  modal: modalReducer,
  loading: loadingReducer,
  }
});

export default store;