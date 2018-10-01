const amqp = require('amqplib/callback_api')
const { q: { uri } } = require('../config')

module.exports = () => {
  const q = 'test_q'

  amqp.connect(uri, (err, conn) => {
    if (err) throw new Error(err)

    conn.createChannel((err, ch) => {
      if (err) throw new Error(err)

      ch.assertQueue(q, { durable: true })
      ch.consume(
        q,
        ({content}) => {
          let mail

          try {
            mail = JSON.parse(content.toString())
          } catch (e) {
            console.log('Error', e)
            mail = content.toString()
          }

          console.log('I received a mail ===>', mail)
          ch.ack(mail)
        }, { noAck: false })
    })
  })
}
