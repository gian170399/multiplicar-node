//requires
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);
    /**RECORREMOS EL CICLO FOR*/
    for (let i = 1; i < limite; i++) {
        console.log(`${base}*${i} = ${base*i}\n`);
    }
}

/**CREAMOS EL ARCHIVO */
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        /**PONEMOS LA CONDICION PARA SABER SI ES NUMERO LA BASE*/
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`)
            return;
        }

        let data = '';
        /**RECORREMOS EL CICLO FOR*/
        for (let i = 1; i < 11; i++) {
            data += `${base}*${i} = ${base*i}\n`
        }
        /**CREA EL ARCHIVO(file)*/
        //const data = new Uint8Array(Buffer.from('Hola mundo'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
                //console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}