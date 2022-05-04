import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selector";
import ReactTypingEffect from "react-typing-effect";

export const TodoList = () => {
    const { todos, visibilityFilter } = useSelector((state) => state);
    console.log("todos: ", todos.todos);
    const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
    console.log("filterTodos: ", filterTodos);
    if (!todos.todos.length) {
        return (
            <div className="notodos-message">
                <ReactTypingEffect text={["Nothing yet!"]} />
            </div>
        );
    }

    return (
        <div>
            {/* <Box textAlign="center" my="4">
                Nothing yet!
            </Box>
            : */}
            <Box>
                {filterTodos &&
                    filterTodos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))}
            </Box>
        </div>
    );
};
