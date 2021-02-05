let data = require('./todoList');
let modelCreate = require('./todoListDB.js');

modelCreate.InsertNew(data, function (res) {
    console.log('Affected rows', res);
});