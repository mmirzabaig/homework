const mongoose = require('mongoose');

const PhonesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  company: String,
  fourG: Boolean
});

modul.exports = mongoose.model('Phones', PhonesSchema);
