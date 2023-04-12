const arr = ['apple','banana','cherry','apple'];

arr.forEach(function(data,index){
  //console.log(`${index}:${data}`);
});

const cherryIndex = arr.findIndex(data => data === 'cherry')
//console.log(cherryIndex);

arr.push('grape');
console.log(arr);

const x = arr.pop();
console.log(x);
console.log(arr);