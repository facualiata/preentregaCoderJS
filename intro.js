/**
 * funcion para pedir edad
 */
// function edad (){
//     let edad = prompt("ingrese su edad ");
//     if(edad <= 17  ||  edad === ""){
//     while (edad <= 17 || edad === ""){
//         alert("usted es menor de edad");
//         edad = prompt("reingrese su edad ");
//         }
//     }
// }

// edad(); 

// // //* function para pedir nombre 
// function usuario() {
//     let nombre = prompt("ingrese su nombre ");
//     if (nombre == ""){
//         alert("su nombre es invalido");
//         while(nombre == ""){
//             nombre = prompt("reingrese su nombre");
//         }
//     }else{alert("bienvenido " + nombre)}
// }
// usuario();
/**function para pedir que va llevar */

class MenuCafe { 
    constructor (variedad, precio){
        this.variedad = variedad;
        this.precio = precio;
    }
}
class MenuComida {
    constructor(variedad, precio){
        this.variedad = variedad;
        this.precio = precio;
    }
}

const cafeSolo = new MenuCafe ("cafeSolo", 180);
const capuchino = new MenuCafe ("capuchino", 190);
const conLeche = new MenuCafe ("conLeche", 200);
const submarino = new MenuCafe ("submarino", 220);
////

const medialunas = new MenuComida("medialunas", 30);
const facturas = new MenuComida ("facturas", 30);
const tostados = new MenuComida("tostados", 50);

const listMenuCafe = [];
const listaMenuComida = [];

listMenuCafe.push(cafeSolo, capuchino, conLeche, submarino
    );

listaMenuComida.push(medialunas, facturas, tostados);


const pedidoCafe = prompt("ingrese su pedido \n coloque 0 para pedir cafe solo \n coloque 1 para pedir capuchino \n coloque 2 para pedir cafe con leche \n coloque 3 para pedir submarino");

const pedidoComida = prompt("ingrese su pedido \n coloque 0 para pedir medialunas \n coloque 1 para pedir facturas \n coloque 2 para pedir tostados");

const pedido = [];
pedido.push(pedidoCafe, pedidoComida);

pedido.forEach((pedido)=> {
    console.log("el precio es de: " + pedido.precio )
})


