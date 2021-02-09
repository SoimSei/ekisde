'use strict'

//carga de modelo

var Cliente = require('../Models/Cliente');

//registrar cliente

function registrar(req,res){
    let cliente= new Cliente()
    cliente.nombre= req.body.nombre
    cliente.apellido=req.body.apellido
    cliente.rut=req.body.rut
    cliente.password=req.body.password
    cliente.correo=req.body.correo

    cliente.save((err, clienteStore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ cliente: clienteStore })

    })
}

function buscarmail(req,res){
    let correoreq= req.query.correo
    Cliente.find({correo: correoreq} , (err,cliente) => {
        if(!cliente) return res.status(404).send({ message: 'Error cliente no existe' })
        res.status(200).send({ cliente })
    })
}

module.exports={
    registrar,
    buscarmail
};