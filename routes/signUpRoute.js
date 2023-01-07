const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')

router.get('/signup', (req, res) =>{
    res.sendFile(path.join(rootDir, 'views', 'signUpPage.html'))
})

module.exports = router