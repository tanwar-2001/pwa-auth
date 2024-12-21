import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  data: {
    auth_token: string;
    refresh_token: string;
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
      role: string;
    };
  };
}

const initialState: AuthState = {
  data: {
    auth_token: "",
    refresh_token: "",
    user: {
      id: 0,
      name: "",
      username: "",
      email: "",
      role: "",
    },
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
