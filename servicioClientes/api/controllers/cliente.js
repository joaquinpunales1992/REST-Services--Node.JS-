'use strict';

    var db = require('../../config/db')();
    module.exports = {getAll, save, getOne, getByCedula, update, delCliente};


    function getAll(req, res, next) {
      res.json({ clientes: db.find()});
    }

    function save(req, res, next) {
        res.json({success: db.save(req.body), description: "Cliente agregado a la lista!"});
    }

    function getOne(req, res, next) {
        var id = req.swagger.params.id.value; 
        var vCliente = db.find(id);
        if(vCliente) {
            res.json(vCliente);
        }else {
            res.status(204).send();
        }       
    }
	
	//Get cliente por cedula
    function getByCedula(req, res, next) {
        var cedula = req.swagger.params.cedula.value;
        var vCliente = db.findByCedula(cedula);
        if(vCliente) {
            res.json(vCliente);
        }else {
            res.status(204).send();
        }       
    }
	

    function update(req, res, next) {
        var vCedulaCliente = req.swagger.params.cedula.value; 
        var vCliente = req.body;
        if(db.update(vCedulaCliente, vCliente)){
            res.json({success: 1, description: "Cliente actualizado!"});
        }else{
            res.status(204).send();
        }

    }

    function delCliente(req, res, next) {
        var vCedulaCliente = req.swagger.params.cedula.value; 
        if(db.remove(cedula)){
            res.json({success: 1, description: "Cliente eliminado!"});
        }else{
            res.status(204).send();
        }

    }