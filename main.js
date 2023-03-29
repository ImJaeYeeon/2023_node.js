const http = require('http');
const fs = require('fs');

const app = http.createServer(function(req,res){
  let url = req.url;

  if(url ==='/')
    url = '/index.html';
  //favicon : 신경쓰지 말것 시험x
  if(url === '/favicon.ico')
    return res.writeHead(404);

  res.writeHead(200);
//__dirname : 'D:\JWP\2023-NODE\문법'
//fs.readFileSync() : 동기함수, 비도기로 바꾸는 것을 권장
  const htmlCode = fs.readFileSync(__dirname + url);
  res.end(htmlCode);
});

app.listen(2222);