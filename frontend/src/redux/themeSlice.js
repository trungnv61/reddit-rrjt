import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "userTheme",
  initialState: {
    themeBackgroundColor: "#ff9051",
  },
  reducers: {
    updateTheme: (state, action) => {
      state.themeBackgroundColor = action.payload.themeBackgroundColor;
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
