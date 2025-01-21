import express from "express"
const router = express.Router()

import ProdutosController from "../controllers/ProdutosController.js"

router.get('/lista', ProdutosController.lista)

router.get('/cadastro', (req, res) => {
    res.render('produtos/cadastro')
})

export default router