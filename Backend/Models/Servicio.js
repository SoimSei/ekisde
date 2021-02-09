'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empresa= require('./Empresa')

const ServicioSchema = Schema(
    {
        empresa: { type: Schema.ObjectId, ref: "empresa" },
        descripcion: String,
        precio:Number
    })

module.exports =mongoose.model('servicio', ServicioSchema)