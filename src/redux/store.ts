import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./slices/sortSlice";

const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
