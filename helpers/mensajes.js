// la traduccion de helpers son ayudantes 
require('colors');

const mostrarMenu = () => {

    return new Promise((resolver) =>{

        console.clear();
        console.log('==========================='.green);
        console.log('   seleccione una opcion '.green)
        console.log('===========================\n'.green);
    
        console.log(`${'1.'.green}Crear una tarea`);
        console.log(`${'2.'.green}Listar tareas`);
        console.log(`${'3.'.green}Listar tareas completadas`);
        console.log(`${'4.'.green}Listar tareas pendientes`);
        console.log(`${'5.'.green}Completa tareas(s)`);
        console.log(`${'6.'.green}Borrar tareas`);
        console.log(`${'0.'.green}Salir\n`);
    
        // como resibir informacion del usuario 
        const leerLinea = require('readline').createInterface({
            //aqui le estamos diciendo que es un input de entrada 
            // y qeu vamos a pausar la ejecucion del hatsa resivir caracteres del usuario
            input: process.stdin,
            //output es para mostrarle un mensjae al usuario 
            output: process.stdout
        })
    
        leerLinea.question('Seleccione una opcion: ', (opcion) => {
            //si colocamos opcion entre llaves podemos ver tambien el valor 
            //console.log({opcion});
            //seramos la entrada de la linea de comandos
            leerLinea.close();
            resolver(opcion);
        })
    })

}

const pausa = () => {

    return new Promise((resolver) => {
        
            const leerLinea = require('readline').createInterface({
                //aqui le estamos diciendo que es un input de entrada 
                // y qeu vamos a pausar la ejecucion del hatsa resivir caracteres del usuario
                input: process.stdin,
                //output es para mostrarle un mensjae al usuario 
                output: process.stdout
            })
        
            leerLinea.question(`\nPrecione ${'ENTER'.green} para continuar: \n`, (opcion) => {
                leerLinea.close();
                resolver();
            })

    })

}

module.exports= {
    mostrarMenu,
    pausa
}




//require('readline'): Esto importa el módulo readline, que permite leer datos de una entrada (como el teclado)
// y escribir en una salida (como la consola

//.createInterface({...}): Aquí estamos creando una interfaz para interactuar con el usuario. 
//Es como establecer un canal de comunicación.

//input: process.stdin: Estamos diciendo que la entrada viene del teclado (el estándar de entrada).

//output: process.stdout: Aquí le estamos indicando que la salida será la consola, donde 
//podemos mostrar mensajes al usuario.


//Definición: process es un objeto global en Node.js que representa el proceso actual que se está ejecutando.
// Puedes pensar en él como el entorno en el que tu aplicación de Node.js está operando.

//Definición: stdin es un flujo de entrada estándar que representa la entrada de datos desde el teclado o cualquier otra fuente de entrada.
// Es donde tu programa recibe datos del usuario.


//Definición: stdout es un flujo de salida estándar que representa la salida de datos hacia la consola o cualquier otra fuente de salida.
// Es donde tu programa envía datos para que se muestren al usuario.