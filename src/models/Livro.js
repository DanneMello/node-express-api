import mongoose from "mongoose";

// Modelo de livros ('Objeto livros')
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: "autores", required: true},
        editora: {type: String, required: true},
        numero_paginas: {type: Number},
    }
);

// Seta o modelo de livros p ser criado no banco
const livros = mongoose.model("livros", livroSchema);

export default livros;