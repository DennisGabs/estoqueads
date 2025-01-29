import express from "express"
const router = express.Router()

import UsuariosController from "../controllers/UsuariosController.js"

router.get('/cadastrar', UsuariosController.cadastrar)
router.post('/salvar', UsuariosController.salvar)

export default router