const { PORT } = process.env
module.exports = {
  port: PORT || 4000,
  MONGODB_URI: 'mongodb://localhost:27017/microservice_db'
}
