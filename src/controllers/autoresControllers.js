import autores from '../models/Autor.js';

class AutorController {

    /**
     * Lista todos os registros
     * @param Request req 
     * @param Response res 
     */
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    }

    /**
     * Busca um registro pelo id
     * 
     * @param Request req 
     * @param Response res 
     */
    static listarAutorPorId = (req, res) => {
        const {id} = req.params;

        // Busca o autor
        autores.findById(id, (err, autores) => {
            if (err) {
                res.status(400).send({message: `Nenhum autor encontrado com o id informado - ${err.message}`});
            } else {
                res.status(200).send(autores || "Nenhum autor encontrado");
            }
        });
    }

    /**
     * Cadastra um novo registro
     * 
     * @param Request req 
     * @param Response res 
     */
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        // Caso houver erro
        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor.`});
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    }

    /**
     * Atualiza um registro
     * 
     * @param Request req 
     * @param Response res 
     */
    static atualizarAutor = (req, res) => {
        const {id} = req.params;

        // Encontra o reg pelo id e atualiza com os dados da requisição
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(201).send({message: "autor atualizado com sucesso!"})
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
    static exlcuirAutor = (req, res) => {
        const {id} = req.params;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Autor removido com sucesso!"});
            } else {
                res.status(500).send({message: `Erro ao tentar excluir o registro - ${err.message}`});
            }
        });
    }
}


export default AutorController;