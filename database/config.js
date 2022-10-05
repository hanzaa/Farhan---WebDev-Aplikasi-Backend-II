const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'farhan3',
    database: 'farhan_backend_2',
    port: 5432,
    password: '12345678'
})

module.exports = databaseConfig