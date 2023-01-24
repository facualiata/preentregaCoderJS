/**
 * funcion para pedir edad
 */
function edad (){
    let edad = prompt("ingrese su edad ");
    if(edad <= 17  ||  edad === ""){
    while (edad <= 17 || edad === ""){
        alert("usted es menor de edad")
        edad = prompt("reingrese su edad ");
    }
}
}

// edad(); 

// //* function para pedir nombre 
function usuario() {
    let nombre = prompt("ingrese su nombre ");
    if (nombre == ""){
        alert("su nombre es invalido");
        while(nombre == ""){
            nombre = prompt("reingrese su nombre")
        }
    }else{alert("bienvenido " + nombre)}
}
usuario();
/**function para pedir que va llevar */

const cafeSolo = new Menu ("cafeSolo", "180");
const capuchuno = new Menu ("capuchuno", "190");
const conLeche = new Menu ("conLeche", "200");
const submarino = new Menu ("submarino", "220");

console.log(cafeSolo);
console.log(submarino);