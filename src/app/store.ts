import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.Slices";
import recordsReducer from "../features/record/records.Slices";

const store = configureStore({
  reducer: { auth: authReducer, records: recordsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
