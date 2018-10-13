// const mongoose = require('mongoose');
//
// const PhonesSchema = new mongoose.Schema({
//   name: {type: String, required: true},
//   company: String,
//   fourG: Boolean
// });
//
// modul.exports = mongoose.model('Phone', PhonesSchema);

const Food = [
  {
    name: 'Pizza',
    cuisine: 'italian',
    hot: true
  },
  {
    name: 'Sushi',
    cuisine: 'japanese',
    hot: false
  },
  {
    name: 'Chicken tikka masala',
    cuisine: 'indian',
    hot: true
  }
]

module.exports = Food;
