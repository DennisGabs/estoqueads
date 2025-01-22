import Produto from "../models/Produto.js"
class ProdutosController {
    lista = async (req, res) => {
        const produtos = await Produto.findAll()
        res.render('produtos/lista', { produtos: produtos } )
    }

    cadastrar = (req, res) => {
        res.render('produtos/cadastrar')
    }

    salvar = (req, res) => {
        var produto = { 
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque
        }

        Produto.create(produto).then(() => {
            res.redirect('/produtos/lista')
        })
    }
}

export default new ProdutosController()