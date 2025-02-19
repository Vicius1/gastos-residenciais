import express from "express"
import PessoaRoutes from "./routes/PessoaRoutes.js";
import TransacaoRoutes from "./routes/TransacaoRoutes.js";
import TotalRoutes from "./routes/TotalRoutes.js"

//Classe que configura e inicializa o servidor
class App{

    //Construtor da classe App
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json()); //Permite o uso de JSON
    }

    //Configuração das rotas
    routes(){
        this.server.use("/pessoas", PessoaRoutes);
        this.server.use("/transacoes", TransacaoRoutes);
        this.server.use("/totais", TotalRoutes);
    }
}

export default App;