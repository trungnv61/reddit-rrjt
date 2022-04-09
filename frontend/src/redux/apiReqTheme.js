import { updateStart, updateError, updateSuccess } from "./themeSlice";
import axios from "axios";

export const updateThemeApi = async (userTheme, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", userTheme);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
