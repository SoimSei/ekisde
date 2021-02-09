'use strict'

//carga de modelo

var Empresa = require('../Models/Empresa');

//registrar empresa

function registrar(req,res){
    let empresa= new Empresa()
    empresa.nombre= req.body.nombre
    empresa.categoria= req.body.categoria
    empresa.rut=req.body.rut
    empresa.password=req.body.password
    empresa.correo=req.body.correo

    empresa.save((err, empresaStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ empresa: empresaStore })

    })
}

function buscarmail(req,res){
    let correoreq= req.query.correo
    Empresa.find({correo: correoreq} , (err,empresa) => {
        if(!empresa) return res.status(404).send({ message: 'Error empresa no existe' })
        res.status(200).send({ empresa })
    })
}

module.exports={
    registrar,
    buscarmail
};