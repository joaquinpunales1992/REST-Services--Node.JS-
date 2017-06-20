'use strict;'
var crypto = require('crypto');

module.exports = function() {
    return {
        vListaClientes : [],

        save(cliente) {
            cliente.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.vListaClientes.push(cliente);
            return 1;           
        },

        find(id) {
            if(id) {
                return this.vListaClientes.find(element => {
                        return element.id === id;
                    }); 
            }else {
                return this.vListaClientes;
            }
        },
		
		findByCedula(cedula) {
            if(cedula) {
                return this.vListaClientes.find(element => {
                        return element.cedula === cedula;
                    }); 
            }else {
                return this.vListaClientes;
            }
        },
		
		

        remove(cedula) {
            var found = 0;
            this.vListaClientes = this.vListaClientes.filter(element => {
                    if(element.cedula === cedula) {
                        found = 1;
                    }else {
                        return element.cedula !== cedula;
                    }
                });
            return found;           
        },

        update(pCedulaCliente, cliente) {
            var vClienteIndex = this.vListaClientes.findIndex(element => {
                return element.pCedulaCliente === cedula;
            });
            if(vClienteIndex !== -1) {
                this.vListaClientes[vClienteIndex].nombre = cliente.nombre;				
                this.vListaClientes[vClienteIndex].fechaNacimiento = cliente.fechaNacimiento;
				this.vListaClientes[vClienteIndex].cedula = cliente.cedula;
				this.vListaClientes[vClienteIndex].domicilio = cliente.domicilio;
				this.vListaClientes[vClienteIndex].nroTarjetaCredito = cliente.nroTarjetaCredito;
                return 1;
            }else {
                return 0;
            }
        }       
    }
};  