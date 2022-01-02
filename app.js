const express = require('express');
const mongoose = require('mongoose');
const pageRouter = require('./routes/pageRouter');
const courseRouter = require('./routes/courseRouter');
const categoryRouter = require('./routes/categoryRoute');
const userRouter = require('./routes/userRoute');

const app = express();

// Connect DB
mongoose.connect('mongodb://localhost/smartEdu');

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for parsing application/json

app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
