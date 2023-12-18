// reducers/modalReducer.ts

import { createReducer } from "@reduxjs/toolkit";
import { openModal, closeModal, changeSortAlph, changeSortBirth } from "../modalActions";

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
    .addCase(openModal, (state) => {
      state.isOpen = true;
    })
    .addCase(closeModal, (state) => {
      state.isOpen = false;
    }).addCase(changeSortAlph, (state) => {
      state.sortByAlphabet = true
      state.sortByBirthday = false
    }).addCase(changeSortBirth, (state) => {
      state.sortByBirthday = true
      state.sortByAlphabet = false
    })
});
