import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const updatedUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};

export const updatedUserTheme = async (userTheme, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", userTheme);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
