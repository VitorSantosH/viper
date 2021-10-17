// carregando express
const express = require("express")
const route = express.Router()

// config senha
const bcrypt = require('bcryptjs')
const { authSecret } = require('../config/.env')
const jwt = require('jsonwebtoken')

// mongo config 
const mongoose = require('mongoose')
const userSchema = require('../models/userModel')
userSchema()
const user = mongoose.model('Users')


route.post('/login', (req, res) => {

    console.log('post /user/login')

    let erros = [];

    if (!req.body.email) {
        erros.push({ texto: "Email inválido!" })
    }
    if (!req.body.senha) {
        erros.push({ texto: "Digite o Email" })
    }

    if (erros.length > 0) {
        res.send({ erro: erros })
        return
    }
    console.log(req.body.email)
    user.find({ email: req.body.email }).lean().then((usuario) => {

        //  console.log(usuario[0].password)
        if (!usuario.length > 0) {
            res.send({ erro: [{ texto: "Usuário não existe" }] })
        } else {


            const batem = bcrypt.compareSync(req.body.senha, usuario[0].password)
            const now = Math.floor(Date.now() / 1000)
            if (batem) {

                const payload = {
                    id: usuario[0]._id,
                    name: usuario[0].name,
                    admin: usuario[0].email,
                    iat: now,
                    exp: now + (60 * 60 * 24 * 3)
                }

                const token = jwt.sign(payload, authSecret)

                res.send({ payload, token })
                return

            } else {
                res.send({erro: [{texto: 'Senha invalida!'}]})
                return 
            }

           


        }

    }).catch((err) => {
        console.log(err)
    })


})

route.post('/cadastro', (req, res) => {

    console.log('Post /cadastro user')
    let erros = []

   
    if (!req.body.name) {
        erros.push({ texto: 'Nome inválido!' })

    }
    if (!req.body.email) {
        erros.push({ texto: "Email inválido!" })
    }
    if (!req.body.senha) {
        erros.push({ texto: "Senha inválida!" })
    }

    if (erros.length > 0) {
        res.send({ erro: erros })
        return
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.senha, salt)
    usuario = {
        name: req.body.name,
        email: req.body.email,
        password: hash,
        tel: req.body.tel
    }

    user.find({ email: req.body.email }).lean().then((retorno) => {

        if (retorno.length > 0) {
            res.send({ erro: [{ texto: "Esse email já está em uso" }] })
            return 
        }

        new user(usuario).save().then( (retonoNewUser) => {

            const now = Math.floor(Date.now() / 1000)
            const   payload = {
                id: retonoNewUser._id,
                name: retonoNewUser.name,
                admin: retonoNewUser.email,
                iat: now,
                exp: now + (60 * 60 * 24 * 3)
            }
            console.log(`authSecret ${authSecret}`)
            const token = jwt.sign(payload, authSecret)

            res.send({payload, token})
            return
           


        }).catch((err) => {
            res.send(err)
        })





    })




})


module.exports = route