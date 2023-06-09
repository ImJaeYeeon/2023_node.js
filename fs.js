const fs = require('fs');
const path = require('path');

//__dirname: 현재 디렉토리의 절대경로(Node의 전역 변수)
result = path.join(__dirname,files[i]);
console.log(result);

//해당 경로에 있는 파일 목록의 배열을 반환
const files = fs.readdirSync(result);

//특정 파일의 전체(절대) 경로
result = __dirname + '\\' + files[1];
console.log(result);

console.log(fs.statSync(result).isFile());