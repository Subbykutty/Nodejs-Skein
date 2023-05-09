var express = require ('express');
var app = express();
var router = express.Router();
var router2 = require('./route2.js')

router.get('/project',route2);


app.listen(4000,()=>{
    console.log('PORT IS RUNNING ON 4000')
});

app.use('/pro',router2)

module.exports = router;