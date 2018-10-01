const path = require('path')

const basePath = path.join(__dirname, '/packages')

module.exports = {
  apps: [
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',
      watch: true,
      env: {
        PORT: 3001,
        SERVICE_DB_PORT: 4001,
        Q_URI: 'amqp://yowvfmjn:sQBYNcuc6mVITDDCy0E6RXZY_6nQD_Yw@woodpecker.rmq.cloudamqp.com/yowvfmjn'
      }
    },
    {
      name: 'DB Service',
      script: basePath + '/database_service/server.js',
      watch: true,
      env: {
        PORT: 4001
      }
    },
    {
      name: 'Maling Service',
      script: basePath + '/mailing_service/index.js',
      watch: true,
      env: {
        Q_URI: 'amqp://yowvfmjn:sQBYNcuc6mVITDDCy0E6RXZY_6nQD_Yw@woodpecker.rmq.cloudamqp.com/yowvfmjn'
      }
    }
  ]
}
