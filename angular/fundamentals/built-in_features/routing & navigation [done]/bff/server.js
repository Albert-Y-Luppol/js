const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const url = require('url');
const clients = {
  http,
  https
};

const app = express();
const port = process.env.PORT || 1409;

app.use(/^(?!\/api\/).+\..+$/, (req, res, next) =>
  express.static(path.join(__dirname, '../dist'), { fallthrough: false })(
    { ...req, path: req.baseUrl, url: req.baseUrl },
    res,
    next
  )
);

app.use(express.json());


app.get('*', (_req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html'))
);
app.listen(port, () => console.log(`Listening on port ${port}`));
