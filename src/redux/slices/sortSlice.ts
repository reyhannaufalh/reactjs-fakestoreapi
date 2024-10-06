import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortState {
  sort: string;
}

const initialState: SortState = {
  sort: "all",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
