import Usuario from "../models/Usuario.js"
import Pessoa from "../models/Pessoa.js"

class UsuariosController {
    cadastrar = async (req, res) => {
        const pessoas = await Pessoa.findAll() 
        res.render('usuarios/cadastrar', {pessoas: pessoas})
    }

    salvar = (req, res) => {
        const usuario = {
            username: req.body.username,
            senha: req.body.senha,
            categoria: req.body.categoria,
            status: req.body.status,
            pessoa_id: req.body.pessoa_id
        }
        
        Usuario.create(usuario).then(() => {
            res.redirect('/')
        })
    }
}

export default new UsuariosController();