import { createSlice } from "@reduxjs/toolkit";
import { getLangs } from "./actions";

const initialState = {
  isLoading: false,
  error: null,
  langs: [],
};
const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLangs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLangs.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isLoading = error.message;
    });
    builder.addCase(getLangs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.langs = payload;
    });
  },
});
export default languageSlice.reducer;
