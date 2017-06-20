'use strict;'


module.exports = function() {
    return {
        vListaUsuarios : [],
		
         agregarUsuario(pUsuario) {
            this.vListaUsuarios.push(pUsuario);
            return 1;           
        },
        
        obtenerMillas(pCedula) {
             if(pCedula) {
                return this.vListaUsuarios.find(element => {
                        return element.cedulaUsuario === pCedula;
                    }); 
            }else {
                return this.vListaUsuarios;
            }
        },
                     
		obtenerMillasPorCedula(cedula) {
            if(cedula) {
                return this.vListaUsuarios.find(element => {
                        return element.cedulaUsuario === cedula;
                    }); 
            }else   {
                    return this.vListaUsuarios;
                    }
                                        }
		
		      
        }
};  