const express = require('express')
const app = express()
const { PORT } = require('./src/helpers/env')

app.use('/', (req, res) => {
    res.send('HOLLA')
})
app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})