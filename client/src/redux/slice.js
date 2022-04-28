import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";

const store = configureStore({
    reducer: reducer,
});

export default store;
