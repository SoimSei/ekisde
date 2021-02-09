'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empresa= require('./Empresa')

const ServicioSchema = Schema(
    {
        empresa: { type: Schema.ObjectId, ref: "empresa" },
        nombre:{type:String, require: true},
        descripcion: String,
        precio:{type:Number, require: true}
    })

module.exports =mongoose.model('servicio', ServicioSchema)