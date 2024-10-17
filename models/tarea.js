const {v4: id} = require('uuid')

class Tarea {

    constructor(descripcion){
        this.id = id();
        this._descripcion = descripcion;
        this._completado = false;
    }

}

module.exports = Tarea;