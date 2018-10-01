const mongoose = require('mongoose')
const Mail = mongoose.model('Mail')

const pinHandler = (_, res) => {
  res.send('healty')
}

const mailHandler = async (_, res) => {
  let mails
  let error

  try {
    mails = await Mail.find()
  } catch (err) {
    error = err
  }

  res.send({
    message: 'Got response from Database',
    service: 'Database Service',
    status: 200,
    payload: mails || error
  })
}

const singleMailHandler = async ({params: { id }}, res) => {
  let email
  let error

  try {
    email = await Mail.findOne({_id: id})
  } catch (err) {
    error = err
  }

  res.send({
    message: 'Got response from Database',
    service: 'Database Service',
    status: 200,
    payload: email || error
  })
}

module.exports = server => {
  server
    .get('/', pinHandler)
    .get('/mails', mailHandler)
    .get('/mails/:id', singleMailHandler)
}
