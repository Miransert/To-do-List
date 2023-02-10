// ______________________________ 1 ______________________________
/* We can see the data internally when we register user credentials.
        This is a problem, since all sorts of people will then be
        able to see a users information, people who for example work
        with the code, that could be analysts that analyze data, or
        there could be scripts reading databases.
    So the database, is not a place to store user information in
        plain text.
    So we want to encrypt the information, but also make sure, that
        other people can authenticate them selfs easily.
    We are therefore going to hash the passwords.
    Hasing works in a way where, it takes the original plain text
        password and pass it into a speciel function, that converts
        the plain text passwords to some garbage (gibberish), works
        somewhat like shown in the example below:
            SPECIAL_FUNCTION(PASSWORD) -> 92hefb8f97buioqd0j3i4bds9
    There are different algorithms to be using to hash passwords,
        such as bcrypt, sha1, sha256, sha512, md5. The algorithm
        we will be using is called bcrypt.
    An important thing to keep in mind, is that the algorithm you
        work with should be slow, which sounds weird, but is true.
        Lets say your database got leaked, by the algorithm being
        slow, it will automatically be harder for a person trying
        to access the passwords, to bruteforce the passwords,
        because when the algorithm is slow, the bruteforce also
        needs to be slow.
    We will be using the bcryptjs which is a js version of the
        bcrypt library.
*/

const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('../model/user')
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost:27017/user-data', {
    useNewUrlParser: true,
    useUnifiedTopology: true // Removing warnings in console
})

router.use(bodyParser.json())
router.get('/signup', (req, res) =>{
    res.sendFile(path.join(rootDir, 'views', 'signUpPage.html'))
})

router.post('/api/register', async (req, res) =>{
    // To understand better, look at point 1 at the top.
    // We first get the name, mail and password, and say we wanna
        // hash the password, we then also write 10, to tell the
        // program the number of times we want bcrypt to run on
        // this password.
    const {name, mail, password: plainTextPassword} = req.body

    // returns error if the user does not enter a name, or if the
        // name is not of type string
    if(typeof name != 'string'){
        return res.json({ status: 'error', error: 'Invalid name'})
    }

    // returns error if the user does not enter a password
    if(!plainTextPassword){
        return res.json({ status: 'error', error: 'Invalid password'})
    }
    // returns error if the users entered password is not
        // longer than 8 characters
    if(plainTextPassword.length <= 8){
        return res.json({ status: 'error', error: 'Password needs to be at least 8 characters long'})
    }

    const password = await bcrypt.hash(plainTextPassword, 10)
    
    // console.log(await bcrypt.hash(password, 10))
    // By running the line above, the password gets turned to some
        // random long gibberish characters, which is the whole point
        // of encryption.
    
    // Now we are going to put the record in the database.
    // We start by adding a try catch block. We put it in try catch
        // block because we want an error to be shown when entering
            // the same mail two times, since we gave the mail part
            // the attribute unique: true
    try{
        // Now we try to create a record and pass in name, email
            // and password
        const response = await User.create({
            name,
            mail,
            password
        })
        console.log('User created successfully: ', response)
    }catch(error){
        if(error.code === 11000){
            // duplicate key
            // error if mail already exist in database
            return res.json({ status: 'error', error: 'The entered e-mail already exists in the database' })
        }
        throw error
    }

    res.json({status: 'ok'})
})

module.exports = router