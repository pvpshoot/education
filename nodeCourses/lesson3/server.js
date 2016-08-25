var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function(req, res) {
  const method = req.method;
  if(!method){
    res.end('something went wrong')
  }
  switch (method) {
    case 'DELETE':
      res.writeHead(403, {'Content-Type': 'text/plain'});
      res.end('403');
      break;
    case 'PUT':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('200');
      break;
    case 'POST':
      res.writeHead(201, {'Content-Type': 'text/plain'});
      res.end('201');
      break;
    case 'GET':
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404');
      break;
    case 'OPTIONS':
      res.writeHead(204, {'Content-Type': 'text/plain'});
      res.end('204');
      break;
    default:
      console.log('something went wrong');
  }
  file.serve(req, res);
}).listen(8080);

console.log('http://localhost:8080/');
