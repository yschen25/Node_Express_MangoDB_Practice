const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/todoDB";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('open', () => {
    console.log('MongoDB has been connected');
})

db.on('error', (error) => {
    console.log('Something went wrong in the connection :', error);
})

module.exports.TodoList = require("./todoModel");