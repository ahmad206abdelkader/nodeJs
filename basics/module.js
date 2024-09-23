const {people, age} = require('./people');

//reqire data from another files

console.log(age,people);

// console.log(people);
// can not write log people with out reqire 

const os = require('os')

//os is buit-in nodejs

// console.log(os);

console.log(os.platform(), os.homedir());
  //platform like windows and linux 
  //homedir is home directory /home/code/... like this

  
