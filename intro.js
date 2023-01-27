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

edad(); 

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

class Menu { 
    constructor (variedad, precio){
        this.variedad = variedad;
        this.precio = precio;
}
/**en las clases puedo poner metodos sin this. */
}
const cafeSolo = new Menu ("cafeSolo", 180);
const capuchino = new Menu ("capuchino", 190);
const conLeche = new Menu ("conLeche", 200);
const submarino = new Menu ("submarino", 220);


const listMenu = [];

listMenu.push(cafeSolo, capuchino, conLeche, submarino
    );


const pedido = prompt("ingrese su pedido \n coloque 0 para pedir cafe solo \n coloque 1 para pedir capuchino \n coloque 2 para pedir cafe con leche \n coloque 3 para pedir submarino");

    console.log(listMenu[pedido]);

for(let i = 0; i < listMenu.length; i++)[
    console.log(listMenu[i])
]


// g
