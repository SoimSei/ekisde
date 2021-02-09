'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EmpresaeSchema = Schema(
    {
        nombre:String,
        rut:String,
        password:String,
        correo:String
    })

module.exports =mongoose.model('empresa', EmpresaSchema)