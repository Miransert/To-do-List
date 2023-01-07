const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')

router.get('/login', (req, res) =>{
    res.sendFile(path.join(rootDir, 'views', 'loginPage.html'))
})

module.exports = router