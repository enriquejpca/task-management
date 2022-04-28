import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: "main",
    initialState,
    reducers: {
        //To write the reducer. Adding main.js?
        addMain: (state, action) => {
            state.push(action.payload);
            return state;
        },
    },
});

export const { addMain } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
