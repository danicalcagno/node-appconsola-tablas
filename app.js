const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multilicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
//usando solo proccess.atgv    
// const [ , , arg3 = 'base = 9'] = process.argv;
// const[ , base] = arg3.split('=');


//En consola escribo node app --base=5
//Asi, me graba el txt con la tabla del 5, por defecto la del 9

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo=>{console.log('El archivo', archivo.rainbow, 'fue creado')})
    .catch(err=>{console.log(err)});