'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ComentarioSchema = Schema(
    {
        cliente: { type: Schema.ObjectId, ref: "cliente" },
        empresa: { type: Schema.ObjectId, ref: "empresa" },
        comentario: String,
        valor:{
            type: Number,
            min: 0,
            max:1
        }
    })

module.exports =mongoose.model('comentario', ComentarioSchema)