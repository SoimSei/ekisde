'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const EmpresaSchema = Schema(
    {
        nombre:{type:String, require: true},
        categoria:{type:String, require: true},
        rut:{type:String, require: true},
        password:{type:String, require: true},
        correo:{type:String, require: true}
    })

module.exports =mongoose.model('empresa', EmpresaSchema)