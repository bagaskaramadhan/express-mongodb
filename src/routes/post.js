const express = require('express')
const router = express.Router()

const Posts = require('../models/post')

router
.post('/insert', (req, res) => {
    res.json(req.body)
})

module.exports = router