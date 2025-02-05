import Pessoa from "../models/Pessoa.js";
import Usuario from "../models/Usuario.js";

class PessoasController {
    index = async (req, res) => {
        let pessoas = await Pessoa.findAll()
        res.render('pessoas/index', { pessoas: pessoas })
    }

    cadastrar = (req, res) => {
        res.render('pessoas/cadastrar')
    }

    salvar = (req, res) => {
        const pessoa = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email
        }

        Pessoa.create(pessoa).then(() => {    
            res.redirect('/pessoas')
        })
    }

    perfil = async (req, res) => {
        let id = req.params.id

        const pessoa = await Pessoa.findByPk(id)
        const usuarios = await Usuario.findAll({
            where: {
                pessoa_id: id
            }
        })
        res.render('pessoas/perfil', {pessoa: pessoa, usuarios: usuarios})
    }
}

export default new PessoasController()