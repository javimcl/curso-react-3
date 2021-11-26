//named import
import {personas, valor} from './imports/data';
//import {mostrarEdad} from './imports/funciones' en la funcion se coloca export
//Default import
//import mostrarEdad from './imports/funciones';
import imprimir, {obj as Objeto1} from './imports/funciones';

console.log(personas);
console.log(valor);
//console.log(mostrarEdad(personas[0]));
console.log(imprimir);
console.log(Objeto1);
