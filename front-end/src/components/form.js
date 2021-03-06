import React from "react";
import apiHelper from "../../utility/apiHelper";

const Form = ({ setStatus, inputText, todos, setInputText, setTodos }) => {
    const inputHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const newTodo = await apiHelper.createTodo(inputText);

        setTodos([
            ...todos,
            newTodo
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
