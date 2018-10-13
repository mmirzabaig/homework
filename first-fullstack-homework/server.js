const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Phones = require('./models/phones')
// middleware >
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.get('/phones', (req, res) => {
//   res.send(Phones);
// });

app.get('/phones', (req, res) => {
  console.log(req.body, ' this is your body');
  res.render('index.ejs', {
    food: Phones
  });
})




app.listen(3000, () => {
  console.log('Your app is LIVE!');
})
