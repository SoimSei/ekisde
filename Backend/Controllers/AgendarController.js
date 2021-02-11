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

function modificarbyCliente(req,res){    
    Agenda.findOneAndUpdate({_id:req.params._id},{
    cliente=req.body.cliente,
    empresa=req.body.empresa,
    servicio=req.body.servicio,
    horaInicio=req.body.horaInicio,
    horaFin=req.body.horaFin
    },function(err,ress){
        if(err){
            res.status(418).send(err)
        }
        else{
            res.status(200).send({mensaje:"Modifico"})
        }
    })

}


function modificarbyEmpresa(req,res){    
    Agenda.findOneAndUpdate({_id:req.params._id},{
    cliente=req.body.cliente,
    empresa=req.body.empresa,
    servicio=req.body.servicio,
    horaInicio=req.body.horaInicio,
    horaFin=req.body.horaFin
    },function(err,ress){
        if(err){
            res.status(418).send(err)
        }
        else{
            res.status(200).send({mensaje:"Modifico"})
        }
    })

}

function buscarbyCliente(req,res){
    Agenda.find({cliente: req.query.cliente} , (err,agenda) => {
        if(!agenda) return res.status(404).send({ message: 'Error agenda no existe' })
        res.status(200).send({ agenda })
    })
}

function buscarbyEmpresa(req,res){
    Agenda.find({empresa: req.query.empresa} , (err,agenda) => {
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

function cancelarbyCliente(req,res){
    Agenda.findOneAndDelete({cliente: req.query.cliente},(err,agenda)=>{
        if(!agenda) return res.status(404).send({ message: 'Error agenda no existe' })
        res.status(200).send({ 'estado':'reserva eliminada' })
    })
}

function cancelarbyEmpresa(req,res){
    Agenda.findOneAndDelete({cliente: req.query.empresa},(err,agenda)=>{
        if(!agenda) return res.status(404).send({ message: 'Error agenda no existe' })
        res.status(200).send({ 'estado':'reserva eliminada' })
    })
}


module.exports={
    agendar,
    buscarbyCliente,
    buscarbyEmpresa,
    listar,
    cancelarbyCliente,
    cancelarbyEmpresa,
    modificarbyCliente,
    modificarbyEmpresa
}