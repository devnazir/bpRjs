import { removeToken } from "@utils/helpers/removeToken.helper";
import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./auth.action";

const initialState = { token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    tokenReceived(state, { payload }) {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => {
      removeToken();
      return initialState;
    });
  },
});

export const { tokenReceived } = authSlice.reducer;
export default authSlice.reducer;
