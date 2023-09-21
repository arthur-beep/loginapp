const express = require('express');
const mysql = require('mysql')
const cors = require('cors')
const port = 5000

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Jumaboy@20',
  database: 'authapp'
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login ('name','email','password') VALUES (?)";
  const inputs = [
    req.body.name,
    req.body.email,
    req.body.password
  ]

  db.query(sql, [inputs], (err, data) => {                                                                                             
    if(err) {
      return res.json("Error");
    }
    return res.json(data);
  })
})

app.post('/Login', (req, res) => {
  const sql = "SELECT * FROM login WHERE 'email' = ? AND 'password'=?";
  db.query(sql, [req.body.email,req.body.password], (err, data) => {
    if(err) {
      return res.json("Error");
    }
    if(data.length > 0){
      return res.json('Success');
    }else{
      return res.json('Fail')
    }
    
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});