const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    message: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('TodoList', todoSchema);

