//strict mode: fue incorporado en es5
//ejecutar de manera estricta el manejo de variables

//lo que interpreta js: var pi=3.14159265359
'use strict';
pi = 3.14159265359
console.log(pi);

//hoisting: elevación de las variables

function myFunction(){
    'use strict';
    return pi = 3.14159265359;
}
console.log(myFunction());

//Visto en: https://www.youtube.com/watch?v=7e6ssF78Af4&ab_channel=LaCocinadelC%C3%B3digo
'use strict';
const usuario = {};
Object.defineProperty(usuario, 'nombre', {value: 'Sacha', writable: false});
usuario.nombre = 'Luis';
console.log(usuario.nombre);

//objetos no extensibles
'use strict';
const usuario = {nombre: 'Sacha'};
Object.preventExtensions(usuario);

usuario.edad = 29;
console.log(usuario);