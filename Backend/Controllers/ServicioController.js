'use strict'

//carga de modelo

var Servicio = require('../Models/Servicio');

//registrar servicio

function registrar(req,res){
    let servicio= new Servicio()
    servicio.nombre= req.body.nombre
    servicio.empresa=req.body.empresaID
    servicio.descripcion=req.body.descripcion
    servicio.precio=req.body.precio

    servicio.save((err, servicioStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ servicio: servicioStore })

    })
}

function listar(req,res){
    Servicio.find({} , (err,servicio) => {
        if(!servicio) return res.status(404).send({ message: 'Error servicio no existe' })
        res.status(200).send({ servicio })
    })
}

module.exports={
    registrar,
    listar
};