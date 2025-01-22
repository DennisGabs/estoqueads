import express from "express"
const router = express.Router()

import ProdutosController from "../controllers/ProdutosController.js"

router.get('/lista', ProdutosController.lista)

router.get('/cadastrar', ProdutosController.cadastrar)

router.post('/salvar', ProdutosController.salvar)

export default router