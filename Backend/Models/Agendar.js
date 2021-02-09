'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cliente= require('./Cliente')
const empresa= require('./Empresa')
const servicio= require('./Servicio')

const AgendarSchema = Schema(
    {
       cliente: { type: Schema.ObjectId, ref: "cliente" },
       empresa: { type: Schema.ObjectId, ref: "empresa" },
       servicio: {type: Schema.ObjectId, ref: "servicio" },
       horaInicio: Date,
       horaFin: Date,
    })

module.exports =mongoose.model('agendar', AgendarSchema)