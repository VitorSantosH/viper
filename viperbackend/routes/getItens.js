// Criando instancia do express
const express = require("express")
const routerProducts = express.Router()


// config banco 
const mongoose = require('mongoose')
const product = mongoose.model('Produtos')




routerProducts.post("/novoProduto", (req, res) => {

    console.log('Post /novoProduto')
   

// Verifica se os campos não vieram vazios na requisicão
    let erros = []

    if(!req.body.name){
        erros.push({texto: 'Nome inválido!'})
    }
    if(!req.body.description) {
        erros.push({texto: 'Descrição inválida!'})
    }
    if(!req.body.value) {
        erros.push({texto: "Informe o valor do produto!"})
    }

    if(erros.length > 0) {
        res.send(erros)
        return 
    }

// "converte" o body da request  
    const produto = {
        name: req.body.name,
        description: req.body.description,
        value: req.body.value
    }
    let nomeValido = true 
   

// verifica se o nome do produto já esta em uso, se não estiver salva o produto
    product.find({name: req.body.name}).lean().then((retorno) => {

        console.log('Products.find')
        

        if(retorno.length > 0){
            nomeValido = false 
            res.json({retorno, nomeValido})
        }  else {
           
            new product(produto).save().then((retornoProduto)=> {

                let retornoDaVez = retornoProduto._doc
                console.log('Salvo com sucesso')
                console.log(retornoProduto)
                res.json({retornoDaVez, nomeValido})
        
            }).catch((err)=> {
                console.log('erro' + err)
                res.json({err})
            })
        }      
       

    })
    

   

})

routerProducts.get('/', (req, res) => {

    console.log('/product get "/" ')
    product.find().lean().then((ArrayProdutos) => {
        res.send({ArrayProdutos})
    }).catch((err)=>{
        res.json({err})
    })
})

module.exports = routerProducts