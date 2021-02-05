console.log('Runing Server!');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/myDB', (err, db) => {
    if (err) throw console.log('Err', err);
    console.log('mongodb is running!');

    // Insert
    db.collection('Persons', function (err, collection) {
        collection.insert({id: 1, firstName: 'Steve', lastName: 'Jobs'});
        collection.insert({id: 2, firstName: 'Bill', lastName: 'Gates'});
        collection.insert({id: 3, firstName: 'James', lastName: 'Bond'});

        collection.count(function (err, count) {
            if (err) throw err;
            console.log('Total Rows:' + count);
        });
    });

    // Update
    db.collection('Persons',function(err,collection){
        // condition, value, writeConcern, callback function
        collection.update({id:1},{ $set: { firstName:'KaKa', lastName:'Gosling'} },
            {w:1}, function(err, result){
                if(err) throw err;
                console.log('Document Updated Successfully');
            });
    });

    // Delete
    db.collection('Persons', function (err, collection) {
        collection.remove({id: 2}, {w: 1}, function (err, result) {
            if (err) throw err;
            console.log('Document Removed Successfully!');
        });
    });

    // Query
    db.collection("Persons", function (err, collection) {
        collection.find({firstName: "KaKa"}).toArray(function (err, items) {
            if (err) throw err;
            console.log(items);
            console.log("We found " + items.length + " results!");
        });

    });

    db.close();
})

app.listen(3000, function () {
    console.log('listening on 3000');
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(__dirname + '/index.html')
})

