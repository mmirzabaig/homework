const mongoose = require('mongoose');

const PhonesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  company: String,
  fourG: String
});

module.exports = mongoose.model('Phone', PhonesSchema);
