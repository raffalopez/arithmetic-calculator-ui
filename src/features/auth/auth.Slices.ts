import { createSlice } from "@reduxjs/toolkit";
import { removeItem } from "../../helpers/localStorage";

export type User = {
  amount: number;
  createdAt: DataTransfer;
  email: string;
  id: string;
  isActive: boolean;
};
export interface IAuthUser {
  user: User;
  token: string;
  refreshToken: string;
}

const initialState: any = {
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { token, refreshToken, user } = action.payload;
      const { amount, createdAt, email, isActive, id, record } = user;

      state.user = {
        email,
        token: token.token,
        amount,
        isActive,
        createdAt,
        refreshToken: refreshToken.refreshToken,
        id,
        recordId: record[0]?.id || "",
        userBalance: record[0]?.userBalance || "",
      };
    },
    logOutUser: (state) => {
      removeItem("token");
      state.user = "";
    },
    setBalance: (state, action) => {
      state.user = { ...state.user, amount: action.payload };
    },
  },
});

export const { loginUser, logOutUser, setBalance } = authSlice.actions;

export default authSlice.reducer;
