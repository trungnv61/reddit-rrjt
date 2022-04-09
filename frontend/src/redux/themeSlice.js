import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "userTheme",
  initialState: {
    themeBackgroundColor: "#ff9051",
    pending: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.themeBackgroundColor = action.payload.themeBackgroundColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = themeSlice.actions;
export default themeSlice.reducer;
