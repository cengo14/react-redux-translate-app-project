import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./languageSlice";
import translateSlice from "./translateSlice";

const store = configureStore({
  reducer: {
    lang: languageSlice,
    translate: translateSlice,
  },
});
export default store;
