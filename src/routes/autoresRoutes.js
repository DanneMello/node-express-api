// Imports necessários 
import express from "express";
import AutorController from "../controllers/autoresControllers.js";

// Utilza a rotas do Express
const router = express.Router();

// Rotas para ações em autores
router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.exlcuirAutor)

export default router;