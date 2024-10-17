const { validate } = require('uuid');

const investigador = require('inquirer').default;
require('colors');


const menuPreguntas = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Que deceas hacer?',
        choices: [
            {
                value:'1',
                name:`${'1.'.green} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.green} Listar tareas`
            },
            {
                value:'3',
                name:`${'3.'.green} Listar tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.green} Listar tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.green} Completar tareas(s)`
            },
            {
                value:'6',
                name:`${'6.'.green} Borar tareas`
            },
            {
                value:'0',
                name:`${'0.'.green} Salir`
            }
        ]
    }
]


const pregunta2 = [
    {
        type:'input',
        name: 'enter',
        message: `preciones ${'ENTER'.green} para continuar `,
    }

] 


const investigadorMenu = async() => {
    console.clear();
    console.log('==========================='.green);
    console.log('   seleccione una opcion '.white)
    console.log('===========================\n'.green);

    const { opcion } =  await investigador.prompt(menuPreguntas)
    return opcion;

}

const pausar = async() => {
    const sipausa = await investigador.prompt(pregunta2)
    return sipausa
}

const leerEntrada = async(mensaje) => {
    const pregunta = [
        {
            type: 'input',
            name: 'descripcion',
            message: mensaje,
            validate( value){
                if( value.length === 0){
                    return 'Porfavor ingresa un valor';
                }
                return true;
            }

        }
    ]

    const { descripcion } = await investigador.prompt(pregunta);
    return descripcion;
}


const tareasBorrar = async(tareas = [] ) => {

    const opciones = tareas.map(( tarea, indexs) => {

        const id = `${indexs + 1}. `.green;

        return {
            value: tarea.id,
            name: `${id} ${tarea._descripcion} `
        }

    })
    //esto es para colocar una opcion al principio
    opciones.unshift({
        value: '0',
        name: '0.  '.green + 'Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borar',
            choices: opciones
        }
    ]

    const {id} = await investigador.prompt(preguntas)
    return id;
}


const confirmar = async(mensaje) => {

    const pregunta = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ];

    const { ok } = await investigador.prompt(pregunta);
    return ok;
}


const mostrarListadoCheck  = async(tareas = [] ) => {

    const opciones = tareas.map(( tarea, indexs) => {

        const id = `${indexs + 1}. `.green;

        return {
            value: tarea.id,
            name: `${id} ${tarea._descripcion}`,
            checked: (tarea.__completado) ? true : false
        }

    })

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices: opciones
        }
    ]

    const { ids } = await investigador.prompt(preguntas)
    return ids ;
}


module.exports = {
    investigadorMenu,
    pausar,
    leerEntrada,
    tareasBorrar,
    confirmar,
    mostrarListadoCheck
}