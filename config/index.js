//CONFIG
const MONGO_URI = 'mongodb://localhost/harmonizedb';
modeule.exports = require('mongoose')
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })