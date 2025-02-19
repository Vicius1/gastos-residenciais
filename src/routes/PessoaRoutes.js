import { Router } from "express";
import pessoaController from "../controllers/PessoaController.js";

const routes = Router();

//Rota para criar uma nova pessoa
routes.post("/", pessoaController.create);

//Rota para listar todas as pessoas
routes.get("/", pessoaController.showAll);

//Rota para deletar uma pessoa baseado no id
routes.delete("/:id", pessoaController.delete);

export default routes;