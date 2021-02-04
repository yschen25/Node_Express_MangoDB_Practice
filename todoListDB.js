let MongoClient = require('mongodb').MongoClient;

module.exports.InsertNew = function (data, callback) {
    MongoClient.connect("mongodb://localhost:27017/todoDB", function (err, db) {
        if (err) throw err;

        db.collection("ToDoList", function (err, collection) {
            if (err) throw err;

            collection.insertMany(data, function (err, r) {
                callback(r.insertedCount);
            });

        });

    });
}