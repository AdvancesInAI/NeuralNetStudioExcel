import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formInitialState, IFormState } from "./appTypes";
/* global console */

const form = createSlice({
  name: "form",
  initialState: formInitialState,
  reducers: {
    setFormState(state, action: PayloadAction<IFormState>) {
      console.log(action.payload);
      state.appScreen = action.payload.appScreen;
      state.authStatus = action.payload.authStatus;
      state.errorMessage = action.payload.errorMessage;
      state.isBusy = action.payload.isBusy;
      state.isInitCalled = action.payload.isInitCalled;
      state.message = action.payload.message;
    },
    setErrorMessage(state, action: PayloadAction<string>) {
      state.isInitCalled = true;
      state.errorMessage = action.payload;
    },
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    resetMessages(state, action: PayloadAction<string>) {
      state.message = action.payload;
      state.errorMessage = action.payload;
    },
    setBusy(state) {
      state.isBusy = true;
      state.errorMessage = "";
      state.message = "";
    },
    setFree(state) {
      state.isBusy = false;
    },

    setAuthForm(state) {
      state.isInitCalled = true;

      state.authStatus = "NO";
      state.appScreen = "auth";
      state.errorMessage = "";
      state.message = "";
    },

    setAuthAndWelcomeForm(state) {
      state.isInitCalled = true;
      state.authStatus = "OK";
      state.errorMessage = "";
      state.appScreen = "welcome";
      state.isBusy = false;
    },
    setWelcomeForm(state) {
      state.appScreen = "welcome";
      state.isBusy = false;
    },
    setDatasetForm(state) {
      state.appScreen = "dataset";
      state.isBusy = false;
    },
    setCreateSolutionForm(state) {
      state.appScreen = "createSolution";
      state.isBusy = false;
    },
  },
});

export const {
  setFormState,
  setErrorMessage,
  setMessage,
  resetMessages,

  setBusy,
  setFree,
  setAuthAndWelcomeForm,
  setWelcomeForm,
  setDatasetForm,
  setCreateSolutionForm,
} = form.actions;

export default form.reducer;
