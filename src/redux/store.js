import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import colorReducer from "./colorSlice.js";
import { combineReducers } from "@reduxjs/toolkit";


// Combinaison des deux reducers

const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
