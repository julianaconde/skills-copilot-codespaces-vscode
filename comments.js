// Create web server
// 1. Require http module
// 2. Create a server
// 3. Listen to port
// 4. Handle requests

// 1. Require http module
const http = require('http');

// 2. Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

// 3. Listen to port
server.listen(3000, '
