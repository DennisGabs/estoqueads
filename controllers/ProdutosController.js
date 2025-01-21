
class ProdutosController {
    lista = (req, res) => {
        res.render('produtos/lista')
    }
}

export default new ProdutosController()