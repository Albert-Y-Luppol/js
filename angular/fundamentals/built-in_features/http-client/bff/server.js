const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
  const url = req.url.split('?')[0];

  res.setHeader('Access-Control-Allow-Origin', '*');

  console.log(url);

  switch (url) {
    case '/text':
      res.statusCode = 200;
      res.end("I'm plain text");
      break;
    case '/jsonp':
      res.statusCode = 200;
      res.end(JSON.stringify(['Yeah', 'Great', '!']))
      break;
    case '/server-communication':
      res.statusCode = 200;
      res.end('Server Connected!')
      break;
    case '/config':
      fs.readFile('../src/assets/config.json', 'utf8', (err, data)=>{
        if(err) {
          res.statusCode = 500;
          return res.end('Server Error');
        }
        res.statusCode = 200;
        res.end(data);
      });
      break;
    default:
      res.statusCode = 404;
      res.end('Wrong Endpoint!');
      break;
  }

}).listen(3000);
