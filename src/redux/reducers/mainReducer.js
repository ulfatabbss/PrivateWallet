import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const mainReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    },
    
});

export const { setData } = mainReducer.actions;

export default mainReducer.reducer;