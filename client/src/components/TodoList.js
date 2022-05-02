import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selector";

export const TodoList = () => {
    const { todos, visibilityFilter } = useSelector((state) => state);
    console.log("todos: ", todos.todos);
    const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

    return (
        <Box>
            {filterTodos &&
                filterTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </Box>
    );
};
{
    /* <Box textAlign="center" my="4">
                    Nothing yet!
                </Box> */
}
