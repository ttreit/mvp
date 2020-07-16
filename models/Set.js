const mongoose = require('mongoose');

const SetsSchema = mongoose.Schema({
  set: String
});

module.exports = mongoose.model('Sets', SetsSchema);

