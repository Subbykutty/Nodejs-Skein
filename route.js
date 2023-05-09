var express = require ('express');
var router = express.Router();

router.get('/',function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
});

router.get('/youtube',function(req,res){
    res.redirect('https://www.youtube.com/vjtechnowizard');
});

module.exports = router;
router.get('testing-->',track)-->router.get('doom',next)-->router.get('then',trace)



