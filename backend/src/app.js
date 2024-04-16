const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//configurar el middewalre de session
app.use(session({
    secret: 'mykeysecret',
    resave: false,
    saveUninitialized: true
}));

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"]
}));

app.use('/', routes);

module.exports = app;