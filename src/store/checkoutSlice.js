import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../globals/misc/Statuses";
import { APIAuthenticated } from "../http";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    data: [],
    status: STATUSES.LOADING,
  },
  reducers: {
    setOrder(state, action) {
      state.data.push(action.payload);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setOrder, setStatus } = checkoutSlice.actions;

export default checkoutSlice.reducer;

// slice for Order creation
export function createOrder(data) {
  return async function createOrderThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await APIAuthenticated.post("/orders/", data);
      //   console.log(response.data);
      dispatch(setOrder(response.data.data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
