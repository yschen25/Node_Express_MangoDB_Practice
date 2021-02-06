import axios from "axios";

const API_URL = "http://localhost:3000/todos/"

async function getAllTodos() {
    const {data: todos} = await axios.get(API_URL);
    return todos;
}

async function createTodo(list) {
    const {data: newTodo} = await axios.post(API_URL, {
        list
    });
    return newTodo;
}

async function deleteTodo(id) {
    return await axios.delete(`${API_URL}${id}`);
}

async function updateTodo(id, payload) {
    const {data: newTodo} = await axios.put(`${API_URL}${id}`, payload);
    return newTodo;
}

export default {getAllTodos, createTodo, deleteTodo, updateTodo};
