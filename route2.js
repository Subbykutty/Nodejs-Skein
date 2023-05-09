var express = require ('express');
var router = express.Router();

var app = express(); 

var router3 = require('./route3.js');



// app.listen(4000,()=>{
//     console.log('PORT IS RUNNING ON 4000')
// });
//router.get('/user',route3);
router.use('/user',router3);



module.exports = router;