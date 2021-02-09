'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var servicioController = require('../controllers/ServicioController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/servicio', servicioController.registrar);
api.get('/servicio', servicioController.listar);

// Exportamos la confi,guración
module.exports = api;
