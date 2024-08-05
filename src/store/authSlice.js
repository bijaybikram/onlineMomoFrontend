import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/Statuses";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    status: STATUSES.LOADING,
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setUser, setStatus } = authSlice.actions;

export default authSlice.reducer;

export function registerUser(data) {
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data
      );
      dispatch(setUser(response.data.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
