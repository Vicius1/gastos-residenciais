import App from "./app.js";

const app = new App().server;

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando em: http://localhost:3000");
});