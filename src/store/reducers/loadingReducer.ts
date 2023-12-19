// reducers/loadingReducer.js

import { createReducer } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../loadingActions";

const initialState = {
  isLoading: false,
};

export const loadingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startLoading, (state) => {
      state.isLoading = true;
    })
    .addCase(stopLoading, (state) => {
      state.isLoading = false;
    });
});
