const bodyParser = require('body-parser');
var express = require('express');
var mysql = require ('mysql2');
var app = express(); 



const app = express();

const con = mysql.createConnection({
    host :'localhost',
    user:'root',
    password :'Skein123$123',
    database : 'task'
})

con.connect((err)=>{
    if (err) throw err;
    console.log('Connected')
});

app.use(bodyParser.json());

const router = express.Router();

const getname = (req,res)=>{
    con.query('select * from users',(error,results) =>{

        if (err) throw err;
        res.send(results);

    });
};
router.get('/my',(req,res) =>{
    if (err) {
              console.log(err);
             }else{
                console.log('TESTING');
            }
});

         res.redirect('https://www.youtube.com/vjtechnowizard');
    


    console.log(req.body)
    const name = req.body.name;
    const email  = req.body.email;
    const id  = req.body.id;
const putname =
con.query('INSERT INTO users (name, email,id) VALUES (?, ?, ?)', [name, email,id], (err, results) => {
      if (err) {
        console.log(err)
      }else{
        res.send("POSTED")
      }

    });
  

  router.get('/youtube',function(req,res){
    res.redirect('https://www.youtube.com/vjtechnowizard');
});


  

router.get('/user',  (req,res) =>{
    res.redirect('https://www.youtube.com/vjtechnowizard');
});
router.post('/users', putname);

app.use('/api/users', router);


app.listen(4001); 


module.exports = router;


app.listen(4000,()=>{
    console.log('PORT IS RUNNING ON 4000')
});










