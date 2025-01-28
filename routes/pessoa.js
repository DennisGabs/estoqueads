import express from "express"
import PessoasController from "../controllers/PessoasController.js"
const router = express.Router()

router.get('/index', PessoasController.index)

export default router