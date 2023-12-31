"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  open: false,
};

export const setToastWindows = createSlice({
  name: "setToast",
  initialState,
  reducers: {
    setToast: (state, action) => {
      state.value = action.payload?.value;
      state.open = action.payload?.open;
      console.log(state.open);
    },
  },
});

export const { setToast } = setToastWindows.actions;
export default setToastWindows.reducer;
