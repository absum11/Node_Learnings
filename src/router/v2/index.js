const express = require('express');
const v2Router = express.Router();


//health check api
v2Router.get('/health', (req, res) => {
    res.send('v2 server is healthy');
});


module.exports = v2Router