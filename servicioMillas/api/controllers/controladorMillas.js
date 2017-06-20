'use strict';

var util = require('util');
var db = require('../../config/db')();
 module.exports = {agregarUsuario, obtenerMillas, obtenerMillasPorCedula};


 function agregarUsuario(req, res, next) {
        res.json({success: db.agregarUsuario(req.body), description: "Usuario agregado con exito!"});
    }


 function obtenerMillas(req, res, next) {
      res.json({ Usuarios: db.obtenerMillas()});
    }

function obtenerMillasPorCedula(req, res, next){
    var vCedula = req.swagger.params.cedula.value;
    console.log(vCedula)
    var vUsuario = db.obtenerMillas(vCedula);
    if (vUsuario)
        {
            res.json(vUsuario)
        }
    else{
        res.status(204).send();
    }
    
}