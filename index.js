import express from "express"
const app = express()
import path from 'path'
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars'
import Handlebars from "handlebars"
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access"

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

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => { 
    console.log(req.params.nome)
    var nome = 'Dennis Lindo da Silva'
    res.render('admin/index', { nome: nome, dados: { empresa: 'teste empresa'} })
})

app.get('/contato', (_, res) => {
    res.render('admin/contato')
})


app.listen(port, () => {
    console.log('listen on port: 3000')
})