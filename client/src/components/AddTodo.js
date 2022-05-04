import {
    Flex,
    Spacer,
    FormControl,
    Input,
    Button,
    Select,
} from "@chakra-ui/react";
import { BsCalendarDay } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
//import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { FaSun, FaMoon } from "react-icons/fa";
import { IconButton, useColorMode } from "@chakra-ui/react";


const options = [
    {
        label: "Personal",
        value: "Personal",
    },
    {
        label: "Work",
        value: "Work",
    },
    {
        label: "Music",
        value: "Music",
    },
    {
        label: "Other",
        value: "Other things",
    },
];

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [categories, setCategories] = useState("");
    const [urgency, setUrgency] = useState("");
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
        dispatch(addTodo(value, categories, urgency));
        setValue("");
    };

    const onChangeSelectCategories = (value) => {
        setCategories(value);
        console.log("eeeee", value);
    };

    const onChangeSelectUrgencyLevel = (value) => {
        setUrgency(value);
        console.log("eeeee", value);
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
                <FormControl mr={2} mb={10}>
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
                <Select
                    mr={2}
                    w={220}
                    color="#805AD5"
                    defaultValue={options.value}
                    onChange={(e) => onChangeSelectCategories(e.target.value)}
                >
                    <option value="Personal" color="#805AD5">
                        Personal
                    </option>
                    <option value="Work" color="#805AD5">
                        Work
                    </option>
                    <option value="Music" color="#805AD5">
                        Music
                    </option>
                    <option value="Other things" color="#805AD5">
                        Other things
                    </option>
                </Select>

                <Button colorScheme="purple" type="submit" disabled={!value}>
                    Add <IoMdAddCircle size={45} />
                </Button>
            </Flex>
            <Select
                w={200}
                color="#805AD5"
                onChange={(e) => onChangeSelectUrgencyLevel(e.target.value)}
            >
                <option value="No urgent" color="#805AD5">
                    No urgent
                </option>
                <option value="Urgent" color="#805AD5">
                    Urgent
                </option>
            </Select>
        </form>
    );
};
