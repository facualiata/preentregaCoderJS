

const contenedor= document.getElementById("contenedor");
const contenedorCarrito= document.getElementById("contenedorCarrito")

function obtenerCarritoLS(){
    let carrito=[];
    const carritoLS = localStorage.getItem("carrito");
    if(carritoLS !== null) {
        carrito= JSON.parse(carritoLS)
    }
    return carrito;

}; 

function agregarCarritoAlLS(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

let carrito = obtenerCarritoLS();


function agregarAlCarrito (producto){
    const verificarProducto = carrito.findIndex((productoCarrito)=>{
        return productoCarrito.nombre === producto.nombre;
    });
    if(verificarProducto === -1){
        carrito.push({
            nombre : producto.nombre,
            precio: producto.precio,
            cantidad: 1,
        })
    }else{
        carrito[verificarProducto].cantidad++;
    }
    
    renderizarCarrito(carrito);
    agregarCarritoAlLS();
};



function renderizarCarrito(productos){
    contenedorCarrito.innerHTML="";
    for(const producto of productos){
        const divCarrito= document.createElement("div");
        divCarrito.className="carrito";

        const h2Carrito= document.createElement("h2");
        h2Carrito.innerHTML=`nombre:${producto.nombre}`;

        const h3Carrito= document.createElement("h3");
        h3Carrito.innerHTML=`precio:$${producto.precio}`;

        const h4Carrito= document.createElement("h4");
        h4Carrito.innerHTML=`cantidad:${producto.cantidad}`;

        divCarrito.append(h2Carrito,h3Carrito,h4Carrito);

        contenedorCarrito.append(divCarrito)
    };
    
};


function renderizarProductos(productos){
    
    contenedor.innerHTML= "";
    for(const producto of productos){

        const div = document.createElement("div");
        div.className="productos";

        const h2 = document.createElement("h2");
        h2.innerHTML= `${producto.nombre}`;

        const h4 = document.createElement("h4");
        h4.innerHTML =`$${producto.precio}`;

        const button = document.createElement("button");
        button.innerHTML = "agregar al carrito";
        button.addEventListener("click",() => {
            agregarAlCarrito(producto);
        })

        div.append(h2, h4, button);

        contenedor.append(div);
    };
};




//traigo los productos del archivo json//


fetch("/productos.json")
.then((response)=>{
    return response.json();
})
.then( (responseProductos) =>{
    renderizarProductos(responseProductos);
    
});

renderizarCarrito(carrito);