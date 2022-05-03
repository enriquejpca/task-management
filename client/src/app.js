import { Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { VisibilityFilter } from "./components/VisibilityFilter";
import { motion } from "framer-motion";

function App() {
    return (
        <Container className="main-container">
            <Heading
                as={motion.div}
                className="h1"
                size="2xl"
                my="12"
                align="center"
                color="#805AD5"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                TASKS MANAGEMENT
            </Heading>
            <AddTodo />
            <VisibilityFilter />
            <TodoList />
        </Container>
    );
}

export default App;

//bg = "red.300";
