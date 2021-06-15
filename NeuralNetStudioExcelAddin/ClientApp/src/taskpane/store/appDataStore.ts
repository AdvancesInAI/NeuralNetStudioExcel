import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appDataInitialState, IAppData } from "./appTypes";

const appData = createSlice({
  name: "appData",
  initialState: appDataInitialState,
  reducers: {
    setAppData(state, action: PayloadAction<IAppData>) {
      state.test = action.payload.test;
    },
  },
});

export const { setAppData } = appData.actions;

export default appData.reducer;
