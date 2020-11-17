require('dotenv').config()

module.exports = {
    PORT:process.env.PORT,
    DB: process.env.DBNAME,
    PW: process.env.DBPASS,
    ORG: process.env.ORGANIZATION
}