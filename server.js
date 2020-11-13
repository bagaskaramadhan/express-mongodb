const express = require('express')
const app = express()
const PORT = 3000

app.use('/api', (req, res) => {
    res.send('HOLLA')
})
app.listen(PORT, () => {
    console.log(`ON ${PORT}`)
})