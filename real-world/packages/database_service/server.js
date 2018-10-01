const server = require('express')()
const bodyParser = require('body-parser')

const { port, MONGODB_URI } = require('./config')

server.use(bodyParser.json())
require('./dbUtil')(MONGODB_URI)
require('./routes/post')(server)
require('./routes/get')(server)

server.listen(port, () => console.log('listening: ', port))
