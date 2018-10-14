const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Phones = require('./models/phones')
// middleware >
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

require('./db/db');

// Display all the phones on the index page
app.get('/phones', (req, res) => {
  Phones.find({}, (err, Phones) => {
    if (err){
      console.log(err);
    } else {
      res.render('index.ejs', {phones: Phones});
    }
  })
})
// Form to get info for a new Phone
app.get('/phones/new', (err, res) => {
  res.render('new.ejs');
})
// Function to to create a new phone with info from app.get(new)
app.post('/phones', (req, res) => {
  console.log(req.body);

  Phones.create(req.body, (err, createdPhones) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdPhones);
      res.redirect('/phones')
    }
  })
});
// app.delete('/phones', (req, res) => {
//
// });




app.listen(3000, () => {
  console.log('Your app is LIVE!');
})
