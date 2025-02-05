import express from "express"
import PessoasController from "../controllers/PessoasController.js"
const router = express.Router()

router.get('/', PessoasController.index)

router.get('/cadastrar', PessoasController.cadastrar)

router.post('/salvar', PessoasController.salvar)

router.get('/perfil', PessoasController.perfil)

export default router