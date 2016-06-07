var http = require('http');
var hello = require('../modules/helloWorld');

http.createServer (function(req, res){
  console.log("hello from http");
res.writeHead(200);
res.write('hello from http ');
res.write(resFunction());
res.write(hello());
res.end();
}).listen(8080);

var resFunction = function(){
console.log("hello from response function");
return (' and this is from resFunction');

};




console.log('server port 8080 is listening');
