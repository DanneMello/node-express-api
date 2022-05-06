import express from "express";
import { response } from "express";

const app = express();
app.use(express.json());

// Atribuindo uma constante de livros para testes
const livros = [
    {"id": 1, "titulo": "O Senhor dos Anéis"},
    {"id": 2, "titulo": "A máquina que mudou o mundo"},
    {"id": 3, "titulo": "O Zé Pikeno Princípe"},
];

// Exibe a página inicial
app.get('/', (req, res) => {
    res.status(200).send('Curso de NodeJS com Express');
});

// Obtém todos os registros
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

// Busca um registro específico
app.get('/livros/:id', (req, res) => {
    let livro = buscarLivros(req.params.id);

    let response = livros[livro] || "Nenhum livro foi encontrado";

    res.json(response);
});

// Cria um novo registro
app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).end('Livro cadastrado com sucesso!');
});

// Atualiza um registro
app.put('/livros/:id', (req, res) => {
    let livro = buscarLivros(req.params.id);
    livros[livro].titulo = req.body.titulo;
    res.json(livros);
});

// Deleta um registro
app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let livro = buscarLivros(id);
    let titulo = livros[livro].titulo;
    livros.splice(livro, 1);
    res.send(`O livro ${titulo}, foi deletado com sucesso!`) ;
});

/**
 * Retorna o livro informado
 * 
 * @param int id 
 * @returns const livros
 */
function buscarLivros(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;