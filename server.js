const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/todoDB"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

app.listen(3000, function () {
    console.log('listening on 3000');
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

db.on('open', () => {
    console.log('Mongodb has been connected');
})

db.on('error', (error) => {
    console.log('Something went wrong in the connection :', error);
})
