const express = require('express')
const app = express()

const hostname = '127.0.0.1'
const port = 3003

app.use('/', express.static(__dirname + '/dist'))

app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`)
})
