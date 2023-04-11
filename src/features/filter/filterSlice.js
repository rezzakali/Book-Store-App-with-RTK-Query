import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterTerm: '',
  searchWord: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { setFilterTerm, setSearchWord } = filterSlice.actions;
