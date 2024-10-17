const fs = require('fs')

const archivo = './db/info.json';

const guardarArchivo = ( informacion ) => {

    fs.writeFileSync(archivo, JSON.stringify(informacion))
}

const leerArchivo = () => {
    if( !fs.existsSync(archivo)){
        return null;
    }

    const informacion = fs.readFileSync(archivo, {encoding: 'utf-8'})
    //El segundo es un objeto de opciones que permite personalizar cómo se lee el archivo.
    //console.log(informacion);

    const infoData  = JSON.parse(informacion)
    console.log(infoData);

    return infoData;
}

module.exports = {
    guardarArchivo,
    leerArchivo
}