'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
require('dotenv').config()
const cliente = require('../Controllers/ClienteController')
const empresa =require('../Controllers/EmpresaController')

function genericAuth(req, res, next) {
    console.log(req)
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    }

    const token = req.headers.authorization.split(" ")[1]


    try {

        const payload = jwt.decode(token, process.env.SECRET_TOKEN)


        if (payload.exp < moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' })
        }

        req.user = payload.sub
    } catch (err) {
        return res.status(401).send({ message: 'El token no es valido' })
    }


    next()

}

function clienteAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    }

    const token = req.headers.authorization.split(" ")[1]


    try {

        const payload = jwt.decode(token, process.env.SECRET_TOKEN)
        if(cliente.buscarByid(payload).status!='200'){
            return res.status(401).send({ message: 'Esta area es para clientes' })
        }

        if (payload.exp < moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' })
        }

        req.user = payload.sub
    } catch (err) {
        return res.status(401).send({ message: 'El token no es valido' })
    }


    next()

}

function empresaAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizacion' })
    }

    const token = req.headers.authorization.split(" ")[1]


    try {

        const payload = jwt.decode(token, process.env.SECRET_TOKEN)
        if(empresa.buscarByid(payload).status!='200'){
            return res.status(401).send({ message: 'Esta area es para empresas' })
        }

        if (payload.exp < moment().unix()) {
            return res.status(401).send({ message: 'El token ha expirado' })
        }

        req.user = payload.sub
    } catch (err) {
        return res.status(401).send({ message: 'El token no es valido' })
    }


    next()

}

module.exports = {
    genericAuth,
    clienteAuth,
    empresaAuth

};