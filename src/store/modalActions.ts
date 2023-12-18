import { createAction } from "@reduxjs/toolkit";

export const openModal = createAction("modal/open");
export const closeModal = createAction("modal/close");
export const changeSortAlph = createAction("modal/changeSortAlph");
export const changeSortBirth = createAction("modal/changeSortBirth");