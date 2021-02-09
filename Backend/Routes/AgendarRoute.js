'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var agendaController = require('../controllers/AgendarController');
const auth=require('../Middle/auth');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/agenda',auth.clienteAuth, agendaController.agendar);
api.get('/agenda', agendaController.listar);
api.get('/agenda/byEmpresa',agendaController.buscarbyEmpresa);
api.get('/agenda/byCliente',agendaController.buscarbyCliente);

// Exportamos la confi,guración
module.exports = api;
