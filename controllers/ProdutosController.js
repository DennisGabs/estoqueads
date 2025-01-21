import Produto from "../models/Produto.js"
class ProdutosController {
    lista = async (req, res) => {
        const produtos = await Produto.findAll()
        res.render('produtos/lista', { produtos: produtos } )
    }
}

export default new ProdutosController()