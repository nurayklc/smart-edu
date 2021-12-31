const express = require('express');
const mongoose = require('mongoose')
const pageRouter = require('./routes/pageRouter')
const courseRouter = require('./routes/courseRouter')

const app = express();

// Connect DB 
mongoose.connect('mongodb://localhost/smartEdu');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

app.use('/', pageRouter);
app.use('/course', courseRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
  //console.log("Mutlu Yıllarrr Gençler :D")
});
