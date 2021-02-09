'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ClienteSchema = Schema(
    {
        nombre:String,
        apellido:String,
        rut:String,
        password:String,
        correo:String
    })

module.exports =mongoose.model('cliente', ClienteSchema)