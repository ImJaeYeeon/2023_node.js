const express = require('express');

const app = express();
//모든 경로에 요청
app.get('*',function(req,res,next){
    console.log('....');
    next();
})

app.get('/', function(req, res, next) {
  console.log('Hello World');
  next();
});

app.get('/test',function(req,res,next){
    console.log('path',req.path);
});

app.listen(3333);