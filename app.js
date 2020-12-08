const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //DESTRUCTURACION EN LAS LLAVES

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite) //AQUI PASAMOS EL PARAMETRO QUE FUE DECLARADO COMO VARIABLE "base"
            .then(archivo => console.log(`Archivo creado: ${archivo}`)) //
            .catch(e => console.log(e));
        console.log('Crear');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
//let base = '5'; //DECLARAMOS LA VARIABLE BASE
//console.log(process.argv);
let argv2 = process.argv;
//console.log(argv.base);
console.log('limite', argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(parametro);