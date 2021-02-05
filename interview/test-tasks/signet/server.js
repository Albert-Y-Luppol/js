const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(require('./middlewares/checkAuth'));

require('./routes')(app);

const server = http.createServer(app);

server.listen(3000, ()=>{
  console.log(`Port: 3000`);
})
