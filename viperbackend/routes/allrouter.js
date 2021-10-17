const express = require('express')
const allroutes = express.Router()

// config mongo
const mongoose = require('mongoose')
const productSchema = require("../models/productModel")
productSchema()
const produto = mongoose.model('Produtos')



// rotas
const routerProducts = require('./getItens')
const routerUsers = require('./login_Logout')



allroutes.use('/produtos', routerProducts)

allroutes.get('/produto/:id', (req, res) => {
    produto.find({_id: req.params.id}).then((produtoResp) => {
        res.json(produtoResp)
    })
})

allroutes.use('/user', routerUsers)

allroutes.get('/', (req, res) => {

    console.log('/produtos get "/" ')
    produto.find().lean().then((ArrayProdutos) => {
        res.json({ArrayProdutos})
    }).catch((err)=>{
        res.json({err})
    })
})



module.exports = {allroutes}