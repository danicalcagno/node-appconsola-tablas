const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 2, listar= false, h=10)=>{
    try{
        
        let salida = '';
        let consola = '';
        
        for (let i= 1; i <= h; i++){
            salida +=  `${base} x ${i} = ${base*i}\n`;
            consola +=  `${base} ${'x'.green} ${i} = ${base*i}\n`;
        }
        
        if (listar){
            console.log(`==================`.green);
            console.log(`Tabla del:`.yellow, colors.red(base));
            console.log(`==================`.green);
            console.log(consola);
        }
        //usando writeFileSync...es mas simple    
        fs.writeFileSync (`./salida/tabla-${base}.txt`, salida);
        return(`tabla-${base}.txt`);        

    }catch{(err)
        throw(err);
    }
}

module.exports = {
    crearArchivo
}