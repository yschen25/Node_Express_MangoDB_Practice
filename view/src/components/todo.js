import React from "react";

const Todo = ({ name, todos, todo, setTodos }) => {
    const completedHandler = () => {
        setTodos(
            todos.map((ele) => {
                if (ele.id === todo.id) {
                    return { ...ele, completed: !ele.completed };
                }
                return ele;
            })
        );
    };

    return (
        <>
            <li>
                <span className={`${todo.completed ? "delete" : ""}`}>{name} </span>
                <button onClick={completedHandler}>Completed</button>
            </li>
        </>
    );
};

export default Todo;
