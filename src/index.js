const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


  //htttp logger
app.use(morgan('combined'));


//template engine 
app.engine('hbs', handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


app.get('/', (req, res) => {
   return res.render('home');
})


app.get('/news', (req, res) => {
  return res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})