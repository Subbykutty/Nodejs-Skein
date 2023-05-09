var express = require ('express');
var router = express.Router();
var router4 = require('./index.js')
var app = express(); 


router.use('/det',router4);


module.exports = router;


