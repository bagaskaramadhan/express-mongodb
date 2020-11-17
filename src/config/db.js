const { PW, DB, ORG } = require('../helpers/env')

module.exports = {
    MONGO_URI: `mongodb+srv://${ORG}:${PW}@cluster0.oqxs0.mongodb.net/${DB}?retryWrites=true&w=majority`
}