const crypto = require('crypto')
const algorithm = 'aes-256-cbc'
const MongoClient = require('mongodb').MongoClient;
// Database name: todoDB
// Database collection name: usersData

const url = "mongodb://localhost:27017/todoDB";

let registerBtn = document.getElementById('registerBtn')
let username = document.getElementById('username')
let mail = document.getElementById('mail')
let password = document.getElementById('password')
let repeatPassword = document.getElementById('repeatPassword')

registerBtn.addEventListener('click', e =>{
    console.log('Clicked')
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("todoDB");
        var myobj = {_id: 1, name: "Mail Test", mail: "MailTest@Test.com", password: "123test123"};
        dbo.collection("usersData").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            dbo.collection('usersData')
            db.close();
        });
    });
    if(repeatPassword.value == password.value){
        
        const initVector = crypto.randomBytes(16)
        const securityKey = crypto.randomBytes(32)
        const cipher = crypto.createCipheriv(algorithm, securityKey, initVector)
        let encryptedData = cipher.update(message, 'utf-8', 'hex')
        encryptedData += cipher.final('hex')
        console.log('Encrypted data:', encryptedData)
        
        document.location.href = 'http://127.0.0.1:5500/homePage/index.html'
    }
})