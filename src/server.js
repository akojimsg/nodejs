const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify({ msg: 'Hello world!' }));

  // res.write('<h1>Nodejs Server</h2>');
  // res.write('<p>Hello world!</p>');

  // load bootstrap base template

  const routes = {
    '/about': './src/views/about.html',
    '/': './src/views/index.html',
    '/index': './src/views/index.html',
  };

  // const html = fs.readFileSync('./src/views/index.html');
  // res.end(html);

  const route = routes[req.url];

  if (route) {
    fs.readFile(route, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('<h2>Internal server error</h2>');
      } else {
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server running on port 3000');
});
