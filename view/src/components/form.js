import React from "react";

const Form = ({ setStatus, inputText, todos, setInputText, setTodos }) => {
    const inputHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { id: Math.random() * 100, message: inputText, completed: false }
        ]);

        setInputText("");
    };

    const selectHandler = (e) => {
        setStatus(e.target.value);
    };

    return (
        <>
            <input value={inputText} onChange={inputHandler} />
            <button onClick={submitHandler} type="submit" value="Submit">
                Submit
            </button>
            <select onChange={selectHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </>
    );
};

export default Form;
