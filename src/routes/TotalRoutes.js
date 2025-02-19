import { Router } from "express";
import totalController from "../controllers/TotalController.js";

const routes = Router();

//Rota para listar totais
routes.get("/", totalController.showTotais);

export default routes;