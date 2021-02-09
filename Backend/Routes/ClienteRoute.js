'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var clienteController = require('../controllers/ClienteController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/cliente', clienteController.registrar);
api.get('/cliente/login', clienteController.clientelogin);
api.get('/cliente',clienteController.buscarmail);

// Exportamos la configuración
module.exports = api;
