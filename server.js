const express = require('express');

const app = express();

const ejs = require('ejs');

const path = require('path');

const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
// if (process.env.PORT) { PORT = process.env.PORT; } else { PORT = 300; }

// const { connected } = require('process');

// Database connection

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/pizza');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//     console.log("mongo db connection OK.");
// });

const url = 'mongodb://localhost:27017/pizza';

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...');
});




// Assets
app.use(express.static('public'));



// set Template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     //res.send('Hello from server');
//     res.render('home');
// });

require('./routes/web')(app);

// app.get('/cart', (req, res) => {
//     res.render('customers/cart');
// });
// app.get('/login', (req, res) => {
//     res.render('auth/login');
// });
// app.get('/register', (req, res) => {
//     res.render('auth/register');
// });


// app.listen(3000, () => {
app.listen(PORT, () => {
    console.log(`Listening on port xyz ${PORT}`);
});