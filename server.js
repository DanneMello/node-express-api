import app from './src/app.js';

// Inicia o servidor na porta informada no .ENV ou na 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});