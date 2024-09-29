 const http = require('http');

 const server = http.createServer((req, res) => {
    console.log('requist made');
 });

 server.listen(3000, 'localhost', () => {
    console.log('listening for requists on port 3000')
 })