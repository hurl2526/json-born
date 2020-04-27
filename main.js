const fs = require('fs')

if(process.argv[2] === 'GET'){
  fs.readFile('./users.json', function(error, data) {
    if (error) {
      throw error;
    }
  
    const actualObj = JSON.parse(data);
    if (process.argv[3] === 'users'){
      console.log(actualObj)
    }else if(process.argv[3] === 'user'){

      console.log(actualObj[process.argv[4]])
    }else if (process.argv[3] === 'friends'){
      console.log(actualObj[process.argv[4]].friends)
    }
  })
console.log(process.argv[3])
}

if(process.argv[2] === 'Post'){
  fs.writeFile('./users.json',data[] function(err) {
    if(err) {
        return console.log(err);
    }
    const content = JSON.stringify(data);
    console.log(data);
});

