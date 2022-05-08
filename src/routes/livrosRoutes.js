// Imports necessários 
import express from "express";
import LivroController from "../controllers/livrosController.js";

// Utilza a rotas do Express
const router = express.Router();

// Rotas para ações em livros
router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.exlcuirLivro)

export default router;