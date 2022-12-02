import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diet: {},
};

export const dietDataReducer = createSlice({
  name: 'dietPlan',
  initialState,
  reducers: {
    setDietPlan: (state, action) => {
      state.diet = action.payload;
    },
  },
});

export const { setDietPlan } = dietDataReducer.actions;

export default dietDataReducer.reducer;