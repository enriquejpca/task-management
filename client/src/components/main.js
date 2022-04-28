import React, { useState } from "react";

const Main = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        console.log("e: ", e);
        console.log("User is typing in the input field");
        setValue(e.target.value);
        console.log("value: ", value);
    };

    return (
        <div>
            <h1>Main page</h1>
            <input type="text" onChange={handleChange}></input>
            <button>Add</button>
        </div>
    );
};

export default Main;
