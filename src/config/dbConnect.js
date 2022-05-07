import mongoose from "mongoose";

// Faz a conexão com o banco
mongoose.connect("mongodb+srv://mongo_db:senha_forte_123@cluster0.clibp.mongodb.net/alura-node");

// Recebe a conexão
let db = mongoose.connection;

// Exporta a variável db que contém a conexão
export default db;


