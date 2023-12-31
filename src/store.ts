"use client";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux";

export const store = configureStore({
  reducer: rootReducer,
});
