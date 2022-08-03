import { createSlice } from "@reduxjs/toolkit";

export const index360Slice = createSlice({
  name: "index360",
  initialState: {
    result: { index: 0, strategy: 0, process: 0, people: 0, customers: 0 },
  },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setResult } = index360Slice.actions;

export default index360Slice.reducer;
