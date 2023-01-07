// NOTES TO NODEJS AND MONGODB  

// Getting the http module
/*let http = require('http')
let url = require('url')
let ownModule = require('./ourOwnModule')
// fs is a module that allows us to work with the files in the computer:
let fs = require('fs')*/

// Creating a server object
/*http.createServer(function (req, res) {
    // Status code 200, means all good, or also means 'ok'
    res.writeHead(200, {'Content-Type': 'text/html'})
    
    res.write('The date and time is: ' + ownModule.myDateTime()) // write
        // a respone to the client
    
    let q = url.parse(req.url, true).query
    let txt = q.year + ' ' + q.month
    res.write('<br>')
    res.write(txt)
    res.write('<br>')
    res.end('Hello World!') // End the response
}).listen(8080)*/ // The server object listens on port 8080
// To get output from the txt, we need to write the input in the url
    // for example: http://localhost:8080/?year=2020&month=April
// The HTTP module can create a server that listens to server ports
    // and gives a response back to the client. We use the createServer
    // method to create an HTTP server. The function passed into the
    // createServer method, will be executed when someone tries to access
    // the computer on port 8080.
// The function holds a argument 'req', which represents the request
    // from the client, as an object (http.IncomingMessage object)


// readFile method allows us to read files on the computer
    // Here we read the content of the html file in same dir(directory)
/*http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)*/
// For creating files, there are some other methods:
    // fs.appendFile()
    // fs.open()
    // fs.writeFile()

// For updating files, there are some other methods:
    // fs.appendFile()
    // fs.writeFile()

// For deleting files, there are one method:
    // fs.unlink()

// For renaming files, there are one method:
    // fs.rename()


// The url module also splits the web address into readable parts.

/*let adr = 'localhost:8080/default.htm?year=2017&month=february'
let q = url.parse(adr, true)

console.log(q.host) // returns 'localhost:8080' ** but return 8080 instead :/ **
console.log(q.pathname) // returns '/default.htm'
console.log(q.search) // returns '?year=2017&month=february'

let qdata = q.query
console.log(qdata)
console.log(qdata.month)*/

// Below we are creating a node file that opens a html file up, and
    // sends the content of it, to the client, if an error happens,
    // it return the error code 404.
/*http.createServer(function (req, res){
    let q = url.parse(req.url, true)
    let filename = '.' + q.pathname
    // Since the file below does exist, it works. If it didn't exist, it
        // would return the if statement below, which return the error
        // code 404
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)*/


// NPM -> Node Package Manager
// NPM is a package manager for node.js packages, or modules.
// A package contains all the files you need for a module.
    // And as said before, modules are JavaScript libraries
// To download a package, open the cli, and write the package
    // you wanna download, for example:
        // npm install upper-case
/*let uc = require('upper-case')
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc.upperCase('Hello my g'))
    res.end()
}).listen(8080)*/


// MonogoDB
// let mongo = require('mongodb')

// Creating a database
// Start by creating a mongodb.client object, and afterwards,
    // we specify the connection url, with the correct ip address
    // and the name of the database we want to create.
/*let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/dbTest'

mongoClient.connect(url, function(err, db){
    if(err) throw err
    console.log('Database Success')
    db.close()
})*/

// In mongodb, a database is not created until it gets content.
    // MongoDB waits until you have created a collection (table),
    // with at least one document (record) before it actually creates
    // the database (and collection).

// Now, to create a collection in mongodb, we use the createCollection()
    // method
    // A mongodb colleciton is the same as a table in mySQL.
/*var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db){
    if(err) throw err
    let dbo = db.db('dbTest')
    dbo.createCollection('customers', function(err, res){
        if (err) throw err
        console.log('Collection created!')
        db.close()
    })
})*/

// Inserting a record, or document as it is called in mongoDB,
    // into a collection, we use the insertOne() method
/*let mongoClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/'

mongoClient.connect(url, function(err, db){
    if(err) throw err
    let dbo = db.db('dbTest')
    let firstDocumentObj = {name: 'Coca Cola', company: 'Manufacture drinks'}
    dbo.collection('customers').insertOne(firstDocumentObj, function(err, res){
        if(err) throw err
        console.log('Inserted one document!')
        db.close()
    })
})*/

// We can also insert many document with the method insertMany() instead.
    // The first parameter of the insertMany() method, is an array of
    // objects. It also takes a callback function where you can work
    // with any errors, or the result of the insertion:
/*let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("dbTest");
    var myobj = [
        { _id: 0, name: 'John', address: 'Highway 71'},
        { _id: 1, name: 'Peter', address: 'Lowstreet 4'},
        { _id: 2, name: 'Amy', address: 'Apple st 652'},
        { _id: 3, name: 'Hannah', address: 'Mountain 21'},
        { _id: 4, name: 'Michael', address: 'Valley 345'},
        { _id: 5, name: 'Sandy', address: 'Ocean blvd 2'},
        { _id: 6, name: 'Betty', address: 'Green Grass 1'},
        { _id: 7, name: 'Richard', address: 'Sky st 331'},
        { _id: 8, name: 'Susan', address: 'One way 98'},
        { _id: 9, name: 'Vicky', address: 'Yellow Garden 2'},
        { _id: 10, name: 'Ben', address: 'Park Lane 38'},
        { _id: 11, name: 'William', address: 'Central st 954'},
        { _id: 12, name: 'Chuck', address: 'Main Road 989'},
        { _id: 13, name: 'Viola', address: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
})*/

// To select data from a collection, we can use the method findOne()
    // The findOne() method finds the first occurence in the selection.
/*let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
    
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    let dbo = db.db("dbTest");
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        // In this case from the above data given, it would return 'John'
        db.close();
    });
});*/

// To select data from a table in MongoDB, we can also use the find() method.
    // The find() method returns all occurrences in the selection.
    // The first parameter of the find() method is a query object. In this
    // example we use an empty query object, which selects all documents
    // in the collection.
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dbTest");
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});*/

// When finding documents in a collection, you can filter the
    // result by using a query object.
    // The first argument of the find() method is a query object,
    // and is used to limit the search.
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dbTest");
    var query = { address: "Park Lane 38" };
    dbo.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});*/

// To delete a record, or document as it is called in MongoDB,
    // we use the deleteOne() method.
    // The first parameter of the deleteOne() method is a query
    // object defining which document to delete.
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dbTest");
    var myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});*/

// You can delete a table, or collection as it is called in MongoDB,
    // by using the drop() method.
    // The drop() method takes a callback function containing the
    // error object and the result parameter which returns true if the
    // collection was dropped successfully, otherwise it returns false.
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dbTest");
  dbo.collection("customers").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});*/

// You can update a record, or document as it is called in MongoDB,
    // by using the updateOne() method.
    // The first parameter of the updateOne() method is a query object
    // defining which document to update.
    // Note: If the query finds more than one record,
    // only the first occurrence is updated.
/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("dbTest");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});*/
// Updating specific fields:
    /*
    ...
        var myquery = { address: "Valley 345" };
        var newvalues = { $set: { address: "Canyon 123" } };
        dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    ...
    */
// When using the $set operator, only the specified fields are updated.

// For a lot of the above examples, regex can be used to sort, find,
    // delete or update documents or collections using RegEx.