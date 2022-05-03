const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Curso de NodeJS',
    '/livros': 'Esses são os livros disponíveis no momento.',
    '/autores': 'Essa é a galera que faz a \'mágica\' acontecer.',
    '/forum': 'Aqui a galera se ajuda',
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor escutanto em http://localhost:${port}`);
});