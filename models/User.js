const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  Address: { type: String, required: true },
  Data: [{
    age: { type: Number, required: true },
    about: { type: String, required: true }
  }]
});

module.exports = mongoose.model('User', userSchema);