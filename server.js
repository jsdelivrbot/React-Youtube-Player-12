const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static('.'))

app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname,"/index.html"));
});

http.createServer(app).listen(PORT);
console.log(`listening on localhost:${PORT}`);
