import Pessoa from "../models/Pessoa.js";

class PessoasController {
    index = async (req, res) => {
        let pessoas = await Pessoa.findAll()
        res.render('pessoas/index', { pessoas: pessoas })
    }
}

export default new PessoasController()