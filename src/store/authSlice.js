import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/Statuses";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: [],
    status: STATUSES.LOADING,
    token: "",
  },
  reducers: {
    setUser(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const { setUser, setStatus, setToken } = authSlice.actions;

export default authSlice.reducer;

// slice for user registration
export function registerUser(data) {
  return async function registerUserThunk(dispatch) {
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

// slice for user login
export function loginUser(data) {
  return async function loginUserThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data
      );
      // console.log({ response });
      dispatch(setToken(response.data.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
