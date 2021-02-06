import React from "react";
import Todo from "./todo";

const TodoList = ({ todos, setTodos, filterTodos }) => {

    return (
        <ul>
            {filterTodos.map((todo, filterTodos) => (
                <Todo
                    key={todo._id}
                    name={todo.list}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            ))}
        </ul>
    );
};

export default TodoList;
