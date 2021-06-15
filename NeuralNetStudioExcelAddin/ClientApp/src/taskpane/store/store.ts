import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer from "./rootReducer";
/* global process, module, require */

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === "development" && (module as any).hot) {
  (module as any).hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
