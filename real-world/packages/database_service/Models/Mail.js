const {Schema} = require('mongoose')

const mainSchema = new Schema({
  subject: String,
  receiver: String,
  content: String
})

module.exports = mainSchema
