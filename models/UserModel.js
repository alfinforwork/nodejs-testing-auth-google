const mongodb = require('mongodb');
const {
  Schema
} = require('mongoose');

const User = new Schema({
  nama: String, // String is shorthand for {type: String}
  email: String,
  password: String,
  no_telp: String,
  alamat: String,
  jenis_kelamin: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
});

module.exports.userModel = User