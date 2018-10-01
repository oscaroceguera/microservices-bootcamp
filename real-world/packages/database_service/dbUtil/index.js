const mongoose = require('mongoose')
const MainSchema = require('../Models/Mail')

module.exports = mongoUri => {
  mongoose.Promise = global.Promise
  mongoose.connect(mongoUri, { useNewUrlParser: true })

  mongoose.model('Mail', MainSchema)
}
