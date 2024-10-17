
require('colors');
const { guardarArchivo,leerArchivo } = require('./helpers/guardarArchivos');
const { investigadorMenu, 
    pausar,  leerEntrada,
    tareasBorrar, confirmar, mostrarListadoCheck } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const {mostrarMenu, pausa} = require('./helpers/mensajes') 


console.clear()

const principal = async() => {

    let opcion = ''
    const tareas = new Tareas();

    const lellendoTareas = leerArchivo();

    if(lellendoTareas){
        //establece tareas
        tareas.cargarTareas(lellendoTareas)
        
    }

    //await pausar()

    do{
        //imprimir el menu y espera una ocion que seleccione el usuario
       opcion =  await investigadorMenu();
       //console.log({opcion});

       switch(opcion){
        case '1':
            const  descrip = await leerEntrada('Descripcion: ');
            tareas.crearTarea(descrip);
        break;
        case '2':
            tareas.listadoCompleto();
        break;
        case '3':
            tareas.listarCompletadas(true);
        break;
        case '4':
            tareas.listarCompletadas(false);
        break;
        case '5': //completar tareas
           const ids = await mostrarListadoCheck(tareas.listarTareas)
             //console.log(ids);
            tareas.completarTareas(ids)
        break;
        case '6':
            const id =  await tareasBorrar(tareas.listarTareas);

            if(id !== '0'){

                const ok =  await confirmar('¿Estas Seguro?')
                console.log({ok});
                if( ok ){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada correctamente')
                }
            }
        break;


       }


       guardarArchivo(tareas.listarTareas);


        //const tarea = new Tarea('comer torta');
        //const tareas = new Tareas();

       // tareas._listado[tarea.id] = tarea;

        console.log('\n');
        //console.log(tareas);
        await pausar();
       //if(opcion !== '0') await pausa();
    }while(opcion !== '0')

}

principal()




//el siclo do while 
//se ejecuta una ves y despues evaluea la condicion 
