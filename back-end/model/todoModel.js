const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    list: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('TodoList', todoSchema);

