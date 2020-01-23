//MODELS - USER.JS
module.exports = (model, Schema) => {
  //create schema
  const User = new Schema({
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })

  return model('User', User)
}

