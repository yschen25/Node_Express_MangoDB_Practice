import "../styles/index.scss";
import React, { useEffect, useState } from "react";
import TodoList from "./components/todoList";
import Form from "./components/form";
let data = require('../../not in use/src/todoList');

const Index = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState(data);
    const [status, setStatus] = useState("all");
    const [filterTodos, setFilterTodos] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilterTodos(todos.filter((ele) => ele.completed === true));
                break;
            case "uncompleted":
                setFilterTodos(todos.filter((ele) => ele.completed === false));
                break;
            default:
                setFilterTodos(todos);
                break;
        }
    };

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    return (
        <div className="App">
            <h1>TodoList</h1>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                setTodos={setTodos}
                todos={todos}
                setStatus={setStatus}
            />
            <TodoList filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default Index;
