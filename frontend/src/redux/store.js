import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import useReducerTheme from "./themeSlice";
import postReducer from "./postSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    userTheme: useReducerTheme,
    post: postReducer,
  },
});
