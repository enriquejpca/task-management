import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    DELETE_TODO,
    UPDATE_TODO,
} from "./actionsTypes";

let nextTodoId = 0;
export const addTodo = (content, categories) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
        categories,
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: { filter },
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id },
});

export const updateTodo = (todo) => ({
    type: UPDATE_TODO,
    payload: todo,
});
