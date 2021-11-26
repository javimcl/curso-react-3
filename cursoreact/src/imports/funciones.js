//export se coloca con llaves en el import
function mostrarEdad(persona){
console.log("Edad" + persona.edad);
}

export const obj = {valor:1};
export default mostrarEdad;
//al declarar por default en el import ya no es con llaves