'use strict'

const Agendar = require('../Models/Agendar');
//carga de modelo

var Agenda = require('../Models/Agendar');

//Registrar en agenda

function agendar(req,res){
    let agenda= new Agenda()
    agenda.cliente=req.body.cliente
    agenda.empresa=req.body.empresa
    agenda.servicio=req.body.servicio
    agenda.horaInicio=req.body.horaInicio
    agenda.horaFin=req.body.horaFin
    
    agenda.save((err,agendaStore)=>{
        if (err) res.status(500).send(`Error base de datos> ${err}`)
        res.status(200).send({agenda:agendaStore})
    })
}

function buscarbyCliente(req,res){
    let cliente= req.query.clienteId
    Agenda.find({cliente: clienteId} , (err,agenda) => {
        if(!agenda) return res.status(404).send({ message: 'Error agenda no existe' })
        res.status(200).send({ agenda })
    })
}

function buscarbyEmpresa(req,res){
    let empresa= req.query.empresaId
    Agenda.find({empresa: empresaId} , (err,agenda) => {
        if(!agenda) return res.status(404).send({ message: 'Error agenda no existe' })
        res.status(200).send({ agenda })
    })
}

function listar(req,res){
    Agenda.find({} , (err,agenda) => {
        if(!agenda) return res.status(404).send({ message: 'Error agenda no existe' })
        res.status(200).send({ agenda })
    })
}

module.exports={
    agendar,
    buscarbyCliente,
    buscarbyEmpresa,
    listar
}