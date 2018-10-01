const axios = require('axios')
const { serviceDatabase: {port} } = require('../config')

const { pushToMessageQ } = require('../Q/connect')

const databaseURL = `http://localhost:${port}`

const get = async path => (await axios.get(`${databaseURL}/${path}`)).data.payload

const post = async (path, body) =>
  (await axios.post(`${databaseURL}/mails`, {
    ...body
  })).data.payload

module.exports = {
  Query: {
    mails: () => get('mails'),
    mail: (_, { id }) => get(`mails/${id}`)
  },
  Mutation: {
    mail: (_, args) => {
      let resutl
      let error
      try {
        resutl = post('mails', args)
      } catch (err) {
        error = err
      }

      pushToMessageQ(JSON.stringify(args))

      return resutl || error
    }
  }
}
