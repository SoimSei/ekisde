'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
app.use(cors())
app.options('*', cors());
const mongoose = require('mongoose')

//rutas
var cliente_routes= require('./Routes/ClienteRoute');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api',cliente_routes);


mongoose.connect('mongodb+srv://kusu:4Q2We9yHOAwzkoDH@practica.uobco.mongodb.net/practica?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(9000, () => {

        console.log("Esta corriendo en puerto 9000")
    })
})
