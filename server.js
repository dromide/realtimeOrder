const express = require('express');

const app = express();

const ejs = require('ejs');

const path = require('path');

const expressLayout = require('express-ejs-layouts');

const PORT = process.env.PORT || 3000;
// if (process.env.PORT) { PORT = process.env.PORT; } else { PORT = 300; }

// Assets
app.use(express.static('public'));

app.get('/', (req, res) => {
    //res.send('Hello from server');
    res.render('home');
});

// set Template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

// app.listen(3000, () => {
app.listen(PORT, () => {
    console.log(`Listening on port xyz ${PORT}`);
});