import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";
import { apiSlice } from "./api/api";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    user: userSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (GDM) => GDM().concat(apiSlice.middleware),
  // GDM => getDefaultMiddleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
