'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var empresaController = require('../controllers/EmpresaController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/empresa', empresaController.registrar);
api.get('/empresa', empresaController.buscarmail);

// Exportamos la confi,guración
module.exports = api;
