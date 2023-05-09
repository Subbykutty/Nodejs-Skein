const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');


const pool = mysql.createPool({
  host: 'localhost',
  // port:3306,
  user: 'root',
  password: 'Skein123$123',
  database: 'task',
});


const app = express();

const router = express.Router();

router.get('/users', (req, res) => {

  console.log('Testing');
});
  const id = req.params.id;
  pool.query('select * from users where id = ?', id, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  });


app.post('/users', (req, res) => {
  console.log(req.body)
  const name = req.body.name;
  const email  = req.body.email;
  const id  = req.body.id;
  
  pool.query('INSERT INTO users (name, email,id) VALUES (?, ?, ?)', [name, email,id], (err, results) => {
    if (err) {
      console.log(err)
    }else{
      res.send("POSTED")
    }
    
  });
});

app.listen(3100,()=>{
  console.log("Server is running")
});

module.exports=router;

