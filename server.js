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
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'views')));


app.listen(9999)