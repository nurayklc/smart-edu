const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override')
const pageRouter = require('./routes/pageRouter');
const courseRouter = require('./routes/courseRouter');
const categoryRouter = require('./routes/categoryRoute');
const userRouter = require('./routes/userRoute');

const app = express();

// Connect DB
mongoose.connect('mongodb+srv://dbUser:5gu8994Htd4N97U@cluster0.ixpee.mongodb.net/smartEdu-db?retryWrites=true&w=majority');

// Template Engine
app.set('view engine', 'ejs');

// Global Variables
global.userIN = null;

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for parsing application/json
app.use(
  session({
    secret: 'smart_edu_keyboard',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://dbUser:5gu8994Htd4N97U@cluster0.ixpee.mongodb.net/smartEdu-db?retryWrites=true&w=majority' }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use('/', pageRouter);
app.use('/courses', courseRouter);
app.use('/categories', categoryRouter);
app.use('/users', userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
