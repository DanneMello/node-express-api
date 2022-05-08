import mongoose from "mongoose";

// Modelo de autor ('Objeto autor')
const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
);

// Relaciona autores com o schema autorSchema
const autores = mongoose.model("autores", autorSchema);

export default autores;