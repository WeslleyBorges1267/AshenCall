const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        "nome": "weslley"
    });
});

// Routes
const createAccount = require('./controller/createAccount');
app.use('/createAccount', createAccount);

module.exports = app;