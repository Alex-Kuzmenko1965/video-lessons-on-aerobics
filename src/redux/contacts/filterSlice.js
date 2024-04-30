import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
		filter: '',
	},
  reducers: {
    setFilterContact(state, { payload }) {      
      state.filter = payload;
    },
  },
});

export const { setFilterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;