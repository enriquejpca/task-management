import { Flex, Spacer, Switch, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, updateTodo } from "../redux/actions";
import { RiDeleteBinLine } from "react-icons/ri";
import { GiSiren } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa";

import { motion } from "framer-motion";

export default function Todo({ todo }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState(todo.content);

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

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(todo.content);
        setEdit(false);
    };

    return (
        <div>
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
                //bgColor="#805AD5"
                bgGradient="linear(to-r, #805AD5, black)"
                opacity="0.95"
                p={4}
                w="580px"
                //w="580px"
                alignItems="center"
                justifyContent="center"
                border="3px"
                borderStyle="solid"
                borderColor="black"
                borderRadius="10px"
                color="black"
                fontSize="20px"
            >
                <Switch
                    //colorScheme="black"
                    mr={5}
                    isChecked={checked}
                    onChange={handleCheked}
                ></Switch>
                {/* <Editable defaultValue={todo.content} size={20} className="content">
                <EditablePreview />
                <EditableInput />
            </Editable> */}
                <div onSubmit={handleUpdate}>
                    {edit ? (
                        <input
                            type="text"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                        />
                    ) : (
                        <div> {todo.content}</div>
                    )}
                </div>

                <Spacer />

                <div className="urgency-words">
                    {todo.urgency === "Urgent" ? (
                        <GiSiren size={40} />
                    ) : (
                        <FaHandPeace />
                    )}
                </div>

                <div className="categories-words">{todo.categories}</div>
                <Button
                    ml={5}
                    mr={5}
                    letterSpacing={1}
                    onClick={() => {
                        if (edit) {
                            setEdit(true);
                            dispatch(
                                updateTodo({
                                    ...todo,
                                    content: content,
                                })
                            );
                        }
                        setEdit(!edit);
                    }}
                >
                    {edit ? "Update" : "Edit"}
                </Button>

                <RiDeleteBinLine
                    className="delete-icon"
                    size={25}
                    color="white"
                    onClick={removeClick}
                />
            </Flex>
        </div>
    );
}
