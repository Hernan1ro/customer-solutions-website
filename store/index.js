import { configureStore } from "@reduxjs/toolkit";
// Reducer
import index360Slice from "./slices/index360";

export const store = configureStore({
  reducer: {
    index360Slice,
  },
});
