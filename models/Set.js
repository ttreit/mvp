const mongoose = require('mongoose');

const SetsSchema = mongoose.Schema({
  set: Array,
  user: String
});

module.exports = mongoose.model('Sets', SetsSchema);

