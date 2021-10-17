const express = require("express")
const mongoose = require('mongoose')
const AllowCors = require("./routes/cors")
const cors = require('cors')


// Configuração express
const app = express()
const port = 3030
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

// rotas 
const {allroutes} = require('./routes/allrouter')

// Mongo 
mongoose.connect("mongodb://localhost/viper", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao Mongo")
}).catch((err) => {
    console.log(`Erro: ${err}`)
})





// config parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(AllowCors)

// rotas
app.use("/imgs",
    express.static('assets')
)

app.use(allroutes)

