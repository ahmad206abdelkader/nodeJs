const fs = require('fs');
//fs (file system) in node

////////reading files
fs.readFile('../docs/blog1.txt', (err, data) => {
 if(err){
    console.log(err)
 }
 console.log(data.toString());
})

console.log('list line');







////////writing files

fs.writeFile('../docs/blog1.txt','hello, world', () => {
console.log('file was written');
});

fs.writeFile('../docs/blog2.txt','hello, again', () => {
    console.log('file was written');
    });

    //this function can create file name blog2 and write in this file 
    //hello again


////////directories
if(fs.existsSync('../basics/assets'))
fs.mkdir('./assets', (err) => {
 if(err){
    console.log(err);
 }
 console.log('folder created')
})

else{
   fs.rmdir('../basics/assets', (err) => {
      if(err) {
         console.log(err)
      }
      console.log('folder deleted');
   })
}

//can create directory





////////deleting files
if(fs.existsSync('../docs/deleteme.txt')){
   fs.unlink('../docs/deleteme.txt', (err) => {
      if(err) {
         console.log(err)
      }
      console.log('file deleted');
   })
}
