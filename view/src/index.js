import '../styles/index.scss';
import React, { useEffect, useState } from 'react';
import TodoList from './components/todoList';
import Form from './components/form';
import apiHelper from '../utility/apiHelper';

const Index = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filterTodos, setFilterTodos] = useState([]);

    useEffect(() => {
        const fetchTodoAndSetTodos = async () => {
            const todos = await apiHelper.getAllTodos();
            console.log('todos', todos);
        };
        fetchTodoAndSetTodos();
    }, []);

    const filterHandler = () => {
        switch (status) {
        case 'completed':
            setFilterTodos(todos.filter((ele) => ele.completed === true));
            break;
        case 'uncompleted':
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
