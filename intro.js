/**
 * funcion para pedir edad
 */
function edad (){
    let edad = prompt("ingrese su edad ");
    if(edad <= 17  ||  edad === ""){
    while (edad <= 17 || edad === ""){
        alert("usted es menor de edad");
        edad = prompt("reingrese su edad ");
        }
    }
}

// edad(); 

// // //* function para pedir nombre 
function usuario() {
    let nombre = prompt("ingrese su nombre ");
    if (nombre == ""){
        alert("su nombre es invalido");
        while(nombre == ""){
            nombre = prompt("reingrese su nombre");
        }
    }else{alert("bienvenido " + nombre)}
}
// usuario();
/**function para pedir que va llevar */

class Menu { 
    constructor (variedad, precio){
        this.variedad = variedad;
        this.precio = precio;
    }
}
const cafeSolo = new Menu ("cafeSolo", 180);
const capuchino = new Menu ("capuchino", 190);
const conLeche = new Menu ("conLeche", 200);
const submarino = new Menu ("submarino", 220);
const medialunas = new Menu("medialunas", 30);
const facturas = new Menu ("facturas", 30);
const tostados = new Menu("tostados", 50);

const productos = [];

productos.push(cafeSolo, capuchino, conLeche, submarino, medialunas, facturas, tostados  );

let carrito = [];

let seleccion = prompt("desea comprar un producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor diga si o no")
    seleccion = prompt("desea compra algo?")
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let tdsLosProductos = productos.map((producto) => producto.variedad + " " + producto.precio + "$")
    alert(tdsLosProductos.join(" - "))
}else if(seleccion == "no"){
    alert("gracias por venir!")
}

while(seleccion != "no"){
    let productos = prompt("agrega un producto a tu carrito")
    let precio = 0;
    if (productos == "cafeSolo" || productos == "capuchino" || precio == "conLeche" || productos == "submarino" || productos == "medialunas" || productos == "facturas" || productos == "tostados") {
        switch(productos) {
            case "cafeSolo":
                precio = 180
            break
            case "capuchino":
            precio = 190
            break
            case "conLeche":
            precio = 200
            break
            case "submarino":
            precio = 220
            break
            case "medialunas":
            precio = 30
            break
            case "facturas":
            precio = 30
            break
            case "tostados":
            precio = 50
            break
            default:
            break
        }        
        let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

        carrito.push({ productos,unidades, precio})
        console.log(carrito)
    }else(alert("no tenemos ese producto"))

    seleccion = prompt("desea seguir comprando?")

    while(seleccion == "no"){
        alert("gracias por su compra, hasta pronto! ")
        carrito.forEach((carritoFinal) => {
            console.log(` producto: ${carritoFinal.productos}, unidades: ${carritoFinal.unidades} total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
} 
// const total = carrito.reduce((acc, el) => acc + el.precio + el.unidades, 0)
// console.log(`el total a pagar por su compra es: ${total} `)
