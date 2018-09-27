const server = require('express')()
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const bodyParser = require('body-parser')
const schema = require('./data/schema')

const { port } = require('./config')

server
  .use(bodyParser.json())
  .use('/graphql', graphqlExpress({ schema }))
  .use('/gq', graphiqlExpress({ endpointURL: '/graphql' }))
  .listen(port, () => console.log('listening: ', port))
