import { configureStore } from "@reduxjs/toolkit";
import settingStore from "./settingStore";

const store = configureStore({
  reducer: {
    settingStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
