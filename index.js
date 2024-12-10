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
    
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Bem vindo ao servidor'))


app.listen(port, ()=>{
    console.log('listen on port: 3000')
})