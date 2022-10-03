import { createSlice } from "@reduxjs/toolkit";

export const index360Slice = createSlice({
  name: "index360",
  initialState: {
    result: { index: 0, strategy: 0, process: 0, people: 0, customers: 0 },
    profile: "",
    points: { index: 0, strategy: 0, process: 0, people: 0, customers: 0 },
    questions: [],
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
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setResult, setProfile, setPoints, setQuestions } =
  index360Slice.actions;

export default index360Slice.reducer;
