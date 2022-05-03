import { Flex, Spacer, FormControl, Input, Button } from "@chakra-ui/react";
import { BsCalendarDay } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
//import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [dateState, setDateState] = useState(new Date());
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    const handleChange = (e) => {
        console.log("e: ", e);
        console.log("User is typing in the input field");
        console.log("Value: ", e.target.value);
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="date-hour-container">
                <div className="date-icon">
                    <BsCalendarDay size={20} color="#805AD5" />
                </div>

                <p className="date">
                    {" "}
                    {dateState.toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    })}
                </p>
                <div>
                    <AiOutlineClockCircle size={20} color="#805AD5" />
                </div>
                <p className="hour">
                    {dateState.toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                    })}
                </p>
                <Spacer />
                <IconButton
                    color="#805AD5"
                    icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
                    onClick={toggleColorMode}
                />
            </div>

            <Flex>
                <FormControl mr={5} mb={10}>
                    <Input
                        type="text"
                        textAlign="center"
                        letterSpacing="1px"
                        placeholder="Insert your task"
                        _placeholder={{ opacity: 0.25, color: "purple" }}
                        focusBorderColor="#805AD5"
                        cursor="pointer"
                        onChange={handleChange}
                        value={value}
                    />
                </FormControl>

                <Button colorScheme="purple" type="submit" disabled={!value}>
                    Add <IoMdAddCircle size={30} />
                </Button>
            </Flex>
        </form>
    );
};
