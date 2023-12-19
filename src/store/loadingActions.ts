// actions/loadingActions.js

import { createAction } from "@reduxjs/toolkit";

export const startLoading = createAction("loading/start");
export const stopLoading = createAction("loading/stop");