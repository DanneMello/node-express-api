// Imports necessários 
import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Caso der algum erro com a conexão
db.on("error", console.log.bind(console, "Erro de conexão"));

// Caso conexão bem sucedida
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

// Cria um instância do Express
const app = express();
app.use(express.json());

// Redireciona as rotas
routes(app);

export default app;