const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },  
  schoolName: {
    type: String,
  },
  email: {
    type: String,
  }
},{ collection: 'readingmate' });

const User = mongoose.model("readingmate", userSchema);

module.exports.User = User;