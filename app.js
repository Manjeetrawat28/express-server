const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3000;

const users = JSON.parse(fs.readFileSync('users.json', 'utf-8')).users;
app.get('/', function (req, res) {
  //res.send('Ram Ram bhai Saariyan ne')
  
  res.sendFile(path.join(__dirname, 'index.html'))
});
app.get('/users', function (req, res) {
    //res.send('Ram Ram bhai Saariyan ne')
    res.send(users);
    const userId = req.query.userId;
    res.send(users.filter(( users ), Boolean  => userId.id == userId));
  });

app.get('/users/:id', function(req, res){
  const userId = req.params.id;
  const user = users.filter(user => user.id == userId);
  user.length == 0 ? res.statusCode(404) : res.send(user); 
}); 

app.post('/users', function(rew, res){
  const user = req.body.user;
  console.log(users.length);
  users.push(user);
  console.log(users.length);
  res.statusCode(201);
});


app.listen(port, 'localhost', () => {
    console.log('server is running at https://localhost:3000/')
});