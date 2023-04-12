const arr = ['apple','banana','cherry','apple'];

arr.forEach(function(data,index){
  //console.log(`${index}:${data}`);
});

const cherryIndex = arr.findIndex(function(data){
  return data === 'cherry';
})
console.log(cherryIndex);