const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
const passport = require('passport');
const session = reuire('express-session');

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const loadInitData = require('./initData');
const passportSetup = require('./passport.setup');

const app = express();

/* Init session */
app.use(session({secret: 'anything'}));

/*Init passport */
app.use(passport.initialize());
app.use(passport.session());

/*Add middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());

/* API endpoints */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

/* API error pages */
app.use('/api', (req, res) => {
  res.status(404).send({message: 'Page not found'});
});

/* React website build */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* Mongoose */
mongoose.connect('mongodb://localhost:27017/aifia', {useNewUrlParser: true, useUnifiedTypology: true});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
  loadInitData();
});
db.on('error', err => console.log('Error: ' + err));

/* Start server */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;