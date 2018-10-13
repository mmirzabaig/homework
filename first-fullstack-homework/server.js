const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// middleware >
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});




app.listen(3000, () => {
  console.log('Your app is LIVE!');
})
