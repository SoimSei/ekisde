'use strict'

//carga de modelo

var Comentario = require('../Models/Comentario');

function agregarComentario(req,res){
    let comentario= new Comentario()
    comentario.cliente= req.body.cliente,
    comentario.empresa=req.body.empresa,
    comentario.comentario=req.body.comentario,
    comentario.valor=req.body.valor

    comentario.save((err,comentarioSave)=>{
        
        if(err) res.status(500).send(`Error de base de datos> ${err}`)

        res.status(200).send({comentario:comentarioSave})
    })

}