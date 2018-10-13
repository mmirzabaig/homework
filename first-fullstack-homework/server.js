const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Phones = require('./models/phones')
// middleware >
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

require('./db/db');

app.get('/phones', (req, res) => {
  res.render('index.ejs', {
    phones : Phones
  })
});
// app.get('/phones', (req, res) => {
//   Phones.find({name : 'iPhone X'}, (err, allPhones) => {
//     if (err){
//       console.log(err);
//     } else {
//       res.render('index.ejs', {phones: allPhones});
//     }
//   })
// })
app.get('/phones/new', (err, res) => {
  res.render('new.ejs');
})

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




// app.get('/phones', (req, res) => {
//   console.log(req.body, ' this is your body');
//   res.render('index.ejs', {
//     food: Phones
//   });
// })




app.listen(3000, () => {
  console.log('Your app is LIVE!');
})
