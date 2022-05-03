import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    UPDATE_TODO,
} from "../actionsTypes";

const initialState = {
    todos: [],
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content, categories } = action.payload;

            return {
                todos: [
                    ...state.todos,
                    { content, completed: false, id, categories },
                ],
            };
        }

        case TOGGLE_TODO: {
            const { id } = action.payload;
            const todos = state.todos.map((obj) => {
                return obj.id === id
                    ? { ...obj, completed: !obj.completed }
                    : obj;
            });
            return { todos };
        }

        case DELETE_TODO: {
            const { id } = action.payload;
            //console.log("todos: ", todos);
            const todos = state.todos.filter((obj) => {
                return obj.id !== id;
            });
            return { todos };
        }

        case UPDATE_TODO: {
            const { content } = action.payload;
            console.log("Action.payload: ", action.payload);

            const todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, content: action.payload.content };
                }
            });
            return { todos };
        }

        default:
            return state;
    }
};

export default todos;

// const todos = state.todos.map((obj) => {
//     if (obj.id === action.payload.id) {
//         return { ...obj, content: action.payload };
//     }
// });
// return { todos };
