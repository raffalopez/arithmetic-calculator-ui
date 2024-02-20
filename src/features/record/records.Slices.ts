import { createSlice } from "@reduxjs/toolkit";

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
  dataRecord: "",
};

export const recordsSlices = createSlice({
  name: "recordUser",
  initialState,
  reducers: {
    userRecord: (state, action) => {
      const record = action.payload;
      const { id, amount, userBalance, operation } = record;
      state.dataRecord = {
        id,
        amount,
        userBalance,
        operation,
      };
    },
    removeUserOperations: (state) => {
      state.dataRecord = "";
    },
  },
});

export const { userRecord, removeUserOperations } = recordsSlices.actions;

export default recordsSlices.reducer;
