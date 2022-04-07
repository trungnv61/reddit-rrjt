import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import useReducerTheme from "./themeSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    userTheme: useReducerTheme,
  },
});
