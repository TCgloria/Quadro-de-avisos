const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
     const filePath = req.url === '/' ? 'home.html' : path.join(__dirname, req.url);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Página não encontrada');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

const port = 8080;
const host = '0.0.0.0'; // Escolha uma porta disponível
server.listen(port, host, () => {
    console.log(`Servidor rodando em http://0.0.0.0:${port}`);
});