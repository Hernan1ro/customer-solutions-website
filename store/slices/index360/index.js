import { createSlice } from "@reduxjs/toolkit";

export const index360Slice = createSlice({
  name: "index360",
  initialState: {
    result: { index: 0, strategy: 0, process: 0, people: 0, customers: 0 },
    profile: "",
    points: { index: 0, strategy: 0, process: 0, people: 0, customers: 0 },
  },
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
  },
});

export const { setResult } = index360Slice.actions;
export const { setProfile } = index360Slice.actions;
export const { setPoints } = index360Slice.actions;

export default index360Slice.reducer;
