// reducers/modalReducer.ts

import { createReducer } from "@reduxjs/toolkit";
import { showModal, changeSortAlph, changeSortBirth } from "../modalActions";

interface ModalState {
  isOpen: boolean;
  sortByAlphabet: boolean;
  sortByBirthday: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  sortByAlphabet: true,
  sortByBirthday: false,
};

export const modalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showModal, (state) => {
      state.isOpen = !state.isOpen;
    })
    .addCase(changeSortAlph, (state) => {
      state.sortByAlphabet = true
      state.sortByBirthday = false
    }).addCase(changeSortBirth, (state) => {
      state.sortByBirthday = true
      state.sortByAlphabet = false
    })
});
