const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <h1>Welcome to My First Node.js Project!</h1>
        <p>Node.js is working successfully.</p>
        <p>My first project using Node.js and npm.</p>
    `);

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});