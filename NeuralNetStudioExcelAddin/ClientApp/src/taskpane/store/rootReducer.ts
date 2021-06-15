import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formStore";
import appDataReducer from "./appDataStore";

const rootReducer = combineReducers({
  form: formReducer,
  appData: appDataReducer,
});

export default rootReducer;
