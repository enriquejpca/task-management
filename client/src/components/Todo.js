import {
    Flex,
    Spacer,
    Switch,
    Editable,
    EditablePreview,
    EditableInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import { RiDeleteBinLine } from "react-icons/ri";
//import { BiEditAlt } from "react-icons/bi";

import { motion } from "framer-motion";

export default function Todo({ todo }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    //const [editable, setEditable] = useState("");

    const handleCheked = (e) => {
        console.log("e: ", e);
        console.log("User is clicking in the clickbox");
        dispatch(toggleTodo(todo.id));
    };

    useEffect(() => {
        setChecked(todo.completed);
    }, [todo]);

    const removeClick = (e) => {
        console.log("e: ", e);
        console.log("The user is clicking in the X");
        dispatch(deleteTodo(todo.id));
    };

    // const handleChangeContent = (e) => {
    //     console.log("e: ", e);
    //     console.log("The user is clicking in the bio edit");
    //     dispatch(editTodo(todo.content));
    // };

    // useEffect(() => {
    //     setEditable(todo.content);
    // }, [todo]);

    return (
        <Flex
            as={motion.div}
            initial={{
                x: "150vw",
                transition: { type: "spring", duration: 2 },
            }}
            animate={{
                x: 0,
                transition: { type: "spring", duration: 2 },
            }}
            whileHover={{
                scale: 0.95,
                transition: { type: "spring", duration: 1 },
            }}
            // initial={{ scale: 0 }}
            // animate={{ rotate: 180, scale: 1 }}
            // transition={{
            //     type: "spring",
            //     stiffness: 260,
            //     damping: 20,
            // }}
            mt={6}
            mb={3}
            bgColor="#805AD5"
            p={4}
            w="580px"
            alignItems="center"
            justifyContent="center"
            border="3px"
            borderStyle="solid"
            borderColor="black"
            borderRadius="10px"
            color="white"
            fontSize="20px"
        >
            <Switch
                //colorScheme="black"
                mr={5}
                isChecked={checked}
                onChange={handleCheked}
            ></Switch>
            <Editable defaultValue={todo.content} size={20} className="content">
                <EditablePreview />
                <EditableInput />
            </Editable>
            {/* <Text as={todo.completed && "del"} size={20}>
                {todo.content}
            </Text> */}
            <Spacer />
            <RiDeleteBinLine
                className="delete-icon"
                size={25}
                onClick={removeClick}
            />
        </Flex>
    );
}
