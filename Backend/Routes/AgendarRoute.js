'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var agendaController = require('../controllers/AgendarController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/agenda', agendaController.agendar);
api.get('/agenda', agendaController.listar);
api.get('/agenda/byEmpresa',agendaController.buscarbyEmpresa);
api.get('(api/byCliente',agendaController.buscarbyCliente);

// Exportamos la confi,guración
module.exports = api;
