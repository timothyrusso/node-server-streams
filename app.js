const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {

  const filePath = path.join(__dirname, 'war-and-peace.txt');
  const fileReader = fs.createReadStream(filePath, { encoding: 'utf8' });
  
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
  
  fileReader.pipe(res);
});

server.listen(3000);
