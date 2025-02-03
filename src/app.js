const express = require('express');
const app = express();
const router = require('./router')

// Middleware to parse JSON requests
app.use(express.json());
app.use('/', router);



module.exports= app