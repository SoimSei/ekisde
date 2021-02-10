'use strict'

//carga de modelo

var Cliente = require('../Models/Cliente');
//carga de tokenizador(?
const services =require('../Services/Tokens');
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

function clientelogin(req,res){

    Cliente.findOne({correo: req.query.correo, password: req.query.password} , (err,cliente) => {
        if(!cliente) return res.status(404).send({ message: 'Error cliente no existe' })
        res.status(200).send({ 'mensaje':'correcto', 'usuario':cliente,'token': services.createTokenCliente(cliente) })
    })
}

function buscarmail(req,res){
    let correoreq= req.query.correo
    Cliente.find({correo: correoreq} , (err,cliente) => {
        if(!cliente) return res.status(404).send({ message: 'Error cliente no existe' })
        res.status(200).send({ cliente })
    })
}

function buscarByid(req,res){

    Cliente.findById({_id:req.sub} , (err,cliente) => {
        if(!cliente) return res.status(404).send({ message: 'Error cliente no existe' })
        res.status(200).send({ state:'finded' })
    })
}

module.exports={
    registrar,
    clientelogin,
    buscarmail,
    buscarByid
};