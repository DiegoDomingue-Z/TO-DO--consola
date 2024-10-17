const Tarea = require("./tarea");
const colores = require('colors')

class Tareas {

    constructor() {
        this._listado = {};
    }

    crearTarea( descripcion = ''){
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    get listarTareas(){
        const listado = [];
        Object.keys(this._listado).forEach( key =>  {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }


    cargarTareas(tareas){
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea
        })
    }

    listadoCompleto(){
        //el forEach el segudo argumento que tiene es el indice 
        this.listarTareas.forEach((tarea, indice) => {
            const inx = `${indice + 1 }`.green;
            const {_descripcion, _completado } = tarea
            const estado = (_completado) ? 'completado'.green : 'Pendinete'.red
            console.log(`${inx} ${_descripcion} :: ${estado}`)
        });
    }

    listarCompletadas(estados = true){
        console.log()
        let contado = 0;

        this.listarTareas.forEach((tarea) => {
            
           
            const {_descripcion, _completado} = tarea

            const estado =  (_completado ) ? 'Completada'.green : 'Incompleta'.red;
           
           if(estados){
               if(_completado){
                   contado += 1;
                  console.log(`${(contado + '.').green} ${_descripcion} :: ${_completado.green}`) 
               }
           }else{ 
                if(!_completado){
                    contado += 1;
                    console.log(`${(contado + '').green} ${_descripcion} :: ${estado}`) 
                }

            }
        })

    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }

    completarTareas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if( !tarea._completado){
                tarea._completado = new Date().toISOString()
            }
        })

        this.listarTareas.forEach( tarea => {
            //si en los ids que pasamos se encuentra la tarea con el id 
            if(!ids.includes(tarea.id)){
                const tarea  = this._listado[tarea.id];
                tarea._completado = null
            }

        })

        
    }


}

module.exports = Tareas;