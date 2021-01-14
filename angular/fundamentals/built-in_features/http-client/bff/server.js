const http = require('http');
const fs = require('fs');

let heroes = [];

http.createServer((req, res)=>{
  const url = req.url.split('?')[0];
  res.setHeader('Access-Control-Allow-Origin', '*');

  switch (req.method){
    case 'OPTIONS':
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.end(0);
      break;
    case 'POST':
      if(req.headers.authorization === 'my-auth-token'){
        switch (url) {
          case '/hero':
            let heroBuffer;
            req.on('data',(chunk)=>{
              if(chunk){
                if(heroBuffer){
                  heroBuffer += chunk;
                } else {
                  heroBuffer = chunk;
                }
              }
            });

            req.on('end', ()=>{
              let hero = JSON.parse(heroBuffer.toString('utf8'));
              heroes.push(hero);
              console.log(hero);
              res.end(JSON.stringify(hero));
            })
            break;
          default:
            res.statusCode = 404;
            res.end('Wrong Endpoint!');
            break;
        }
      } else {
        res.end(401);
      }
      break;
    case 'DELETE':
      if(req.headers.authorization === 'my-auth-token'){
        const heroName = url.split('/').pop();
        heroes = heroes.filter((hero)=>{
          if(hero.name == heroName) {
            return false;
          }
          return true;
        });
        console.clear();
        console.log(heroes);
        res.end(JSON.stringify(heroName));
      } else {
        res.end(401);
      }
      break;
    default:
      switch (url) {
        case '/heroes':
          res.end(JSON.stringify(heroes));
          break;
        case '/text':
          res.end("I'm plain text");
          break;
        case '/jsonp':
          res.end(JSON.stringify(['Yeah', 'Great', '!']))
          break;
        case '/server-communication':
          res.end('Server Connected!')
          break;
        case '/config':
          fs.readFile('../src/assets/config.json', 'utf8', (err, data)=>{
            if(err) {
              res.statusCode = 500;
              return res.end('Server Error');
            }
            res.end(data);
          });
          break;
        default:
          res.statusCode = 404;
          res.end('Wrong Endpoint!');
          break;
      }
      break;
  }

}).listen(3000);
