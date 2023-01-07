// http request methods:
    // GET: used to read/receive data from web server. GET returns an
        // HTTP status code of 200 (OK) if the data is successfully
        // retrieved from the server.
    // POST: used to send data (file, form data, etc.) to the server.
        // On successful creation, it return an http status code of 201.
    // PUT: used to modify the data on the server. It replaces the
        // entire content at a particular location with data that is
        // passed in the body payload.
    // PATCH: similar to PUT request, but only difference is, it
        // modifies a part of the data. It will only replace the content
        // that you want to update.
    // DELETE: used to delete the data on the server at a specified
        // location.

const express = require('express')
const path = require('path')
const app = express()

// app.use means “Run this on ALL requests”
// app.get means “Run this on a GET request, for the given URL”

// By writing where the file is, it is not enough, since it needs
    // to know the exact path. To give it the exact path, we
    // write root, and end with __dirname. By writing dirname,
    // the program understands that it is from this server.js
    // file that the path is writen from.

const home = require('./routes/homeRoute')
const signup = require('./routes/signUpRoute')
const login = require('./routes/loginRoute')
const rootDir = require('./utils/path')

app.use(home)

app.get('/css/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'style.css'))
})

app.get('/toDoHome.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'toDoHome.js'))
})

// ____________________________________________________________

app.use(signup)

app.get('/css/signUpStyle.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'signUpStyle.css'))
})

// ____________________________________________________________

app.use(login)

app.get('/css/loginStyle.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'css', 'loginStyle.css'))
})

// ____________________________________________________________

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(9999, () => {
    console.log('Server running')
})