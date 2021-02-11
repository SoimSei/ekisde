'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ClienteSchema = Schema(
    {
        nombre:{type:String, require: true},
        apellido:{type:String, require: true},
        rut:{type:String, require: true, unique:true},
        password:{type:String, require: true},
        correo:{type:String, require: true}
    })

module.exports =mongoose.model('cliente', ClienteSchema)