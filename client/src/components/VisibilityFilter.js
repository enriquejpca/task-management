import { Container, Tabs, TabList, Tab } from "@chakra-ui/react";
import { VISIBILITY_FILTER } from "../constants";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
import { motion } from "framer-motion";

export const VisibilityFilter = () => {
    const dispatch = useDispatch();
    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
                        const currentFilter = VISIBILITY_FILTER[filterkey];
                        return (
                            <Tab
                                as={motion.div}
                                initial={{ y: 1000 }}
                                animate={{ y: 0 }}
                                transition={{ type: "spring", duration: 2 }}
                                fontSize={17}
                                marginTop={8}
                                //borderColor="#805AD5"
                                _focus={{ borderColor: "#805AD5" }}
                                _selected={{
                                    color: "#805AD5",

                                    borderColor: "#805AD5",
                                }}
                                key={`${currentFilter}`}
                                onClick={() =>
                                    dispatch(setFilter(currentFilter))
                                }
                            >
                                {currentFilter}
                            </Tab>
                        );
                    })}
                </TabList>
            </Tabs>
        </Container>
    );
};

{
    /* <Tab>All tasks</Tab>
                    <Tab>Completed tasks</Tab>
                    <Tab>Incompleted tasks</Tab> */
}
