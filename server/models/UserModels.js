const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailaddress: { type: String, required: true, unique: true },
    phonenumber:{type:Number,required:true, unique: true},
    password:   { type: String, required: true },
    confirmpassword: { type: String, required: true }
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;

