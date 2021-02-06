const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./model');

app.use(cors());

app.listen(3000, function () {
    console.log('listening on 3000');
})

app.use(bodyParser.json());

function success(res, payload) {
    return res.status(200).json(payload);
}

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get("/todos", async (req, res, next) => {
    try {
        const todos = await db.TodoList.find({});
        return success(res, todos);
    } catch (err) {
        console.log('err', err);
        next({ status: 400, message: "failed to get todos" });
    }
});

app.post("/todos", async (req, res, next) => {
    try {
        const todo = await db.TodoList.create(req.body);
        return success(res, todo);
    } catch (err) {
        next({ status: 400, message: "failed to create todo" });
    }
});

app.put("/todos/:id", async (req, res, next) => {
    try {
        const todo = await db.TodoList.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        return success(res, todo);
    } catch (err) {
        next({ status: 400, message: "failed to update todo" });
    }
});

app.delete("/todos/:id", async (req, res, next) => {
    try {
        await db.TodoList.findByIdAndRemove(req.params.id);
        return success(res, "todo deleted!");
    } catch (err) {
        next({ status: 400, message: "failed to delete todo" });
    }
});


