var express = require('express')

var server = express()

server.use(express.static('public'))

var port = 3000

server.listen(port, function(){
  console.log('listening on port 3000')
})