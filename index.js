const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))
app.use(express.static(__dirname));

//edit this with new routes/queries
//app.get('/users/:id', db.getUserById) 
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})