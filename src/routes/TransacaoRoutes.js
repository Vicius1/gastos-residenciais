import { Router } from "express";
import transacaoController from "../controllers/TransacaoController.js";

const routes = Router();

//Rota para criar uma nova transacao
routes.post("/", transacaoController.create);

//Rota para listar todas as transacoes
routes.get("/", transacaoController.showAll);

export default routes;