const express = require('express')
const { PORT } = require('./src/helpers/env')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./src/config/db')
const bodyParser = require('body-parser')
const router = require('./src/routes/post')


// connect to mongodb
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected MongoDB`))
.catch(err => console.log(err))

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`RUNNING ON PORT ${PORT}`)
})