import express from "express"
const app = express()
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from "handlebars"
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access"
import bodyParser from "body-parser"

const port = 3000

/* CONFIG PASTA ESTATICA */
const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**Configuracao da visao */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'application',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))

app.set('view engine', 'handlebars')

app.set('views', './views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => { 
    console.log(req.params)
    var nome = 'Dennis Lindo da Silva'
    res.render('admin/index', { nome: nome, dados: { empresa: 'teste empresa'} })
})

app.get('/contato', (_, res) => {
    res.render('admin/contato')
})

app.get('/cadastro', (req, res) => {
    res.render('admin/cadastro')
})


import produto from './routes/produto.js'
app.use('/produtos', produto)


app.post('/cadastro', (req, res) => {
    var produto = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        estoque: req.body.estoque,
        preco: req.body.preco,
        status: 1,
        foto: '/img/semfoto.png'
    }
    res.render('produtos/detalhe', { produto: produto})
})

app.listen(port, () => {
    console.log('listen on port: 3000')
})