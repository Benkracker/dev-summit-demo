var express = require('express');
var router = express.Router();

router.get('/hello-devsummit', (req, res, next) => {
    res.send('Hello World, from the 2018 Acumen Solutions Developer summit!');
});

module.exports = router;