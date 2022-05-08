import livros from '../models/Livro.js';

class LivroController {

    /**
     * Lista todos os registros
     * @param Request req 
     * @param Response res 
     */
    static listarLivros = (req, res) => {
        livros.find()
            .populate("autor")
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    }

    /**
     * Busca um registro pelo id
     * 
     * @param Request req 
     * @param Response res 
     */
    static listarLivroPorId = (req, res) => {
        const {id} = req.params;

        // Busca o livro
        livros.findById(id)
            .populate("autor", ["nome", "nacionalidade"])
            .exec((err, livros) => {
                if (err) {
                    res.status(400).send({message: `Nenhum livro encontrado com o id informado - ${err.message}`});
                } else {
                    res.status(200).send(livros || "Nenhum livro encontrado");
                }
            });
    }

    /**
     * Cadastra um novo registro
     * 
     * @param Request req 
     * @param Response res 
     */
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        // Caso houver erro
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    /**
     * Atualiza um registro
     * 
     * @param Request req 
     * @param Response res 
     */
    static atualizarLivro = (req, res) => {
        const {id} = req.params;

        // Encontra o reg pelo id e atualiza com os dados da requisição
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(201).send({message: "Livro atualizado com sucesso!"})
            } else {
                res.status(500).send({message: `${err.messa} - Erro ao tentar salvar o registro`})
            }
        });
    }

    /**
     * Deleta um registro
     * 
     * @param Request req 
     * @param Response res 
     */
    static exlcuirLivro = (req, res) => {
        const {id} = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Livro removido com sucesso!"});
            } else {
                res.status(500).send({message: `Erro ao tentar excluir o registro - ${err.message}`});
            }
        });
    }

    /**
     * Retorna um livro pela editora
     * 
     * @param Request req 
     * @param Response res 
     */
    static listarLivroPorEditora = (req, res) => {
        const {editora} = req.query;

        // Busca o livro pela editora informada
        livros.find({"editora": editora}, {}, (err, livros) => {
            if (!err) {
                let livro = !livros || livros.length == 0 ? "Nenhum livro encontrado" : livros;
                res.status(200).send(livro);
            } else {
                res.status(500).send(`Erro ao tentar localizar livro - ${err.message}`)
            }
        });
    }
}


export default LivroController;