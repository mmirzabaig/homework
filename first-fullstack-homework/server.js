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
// show individual pages for each object
app.get('/phones/:id', (req, res) => {

  Phones.findById(req.params.id, (err, foundPhone) => {
    res.render('show.ejs', {phones : foundPhone})
  })
});
// delete object individually
app.delete('/phones/:id', (req, res) => {
  console.log(req.params.id, ' body to be deleted');

  Phones.findByIdAndRemove(req.params.id, (err, foundPhone) => {
    res.redirect('/phones');
  })
});


app.get('/phones/:id/edit', (req, res) => {


Phones.findById(req.params.id, (err, foundPhone) => {
  res.render('edit.ejs', {
    phone: Phones
  });
});
});

app.put('/phones/:id', (req, res) => {
  Phones.findByIdAndUpdate(req.params.id, req.body, (err, updatedPhone) => {
    res.redirect('/phones');
  });
});





app.listen(3000, () => {
  console.log('Your app is LIVE!');
})
