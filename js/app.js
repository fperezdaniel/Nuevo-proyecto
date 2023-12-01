/* class Mundo {
    constructor() {
        this.arraypersona = [];
    }
    pushearHumano(humano) {
        this.arraypersona.push(humano);
        console.log(this.arraypersona);
    }
    humanoYaExiste(nuevo) {
        return this.arraypersona.some((el) => el.nombre === nuevo);
    }
    buscarHumano(nombre) {
        return this.arraypersona.find((el) => el.nombre === nombre);
    }
    aplicandoMetodoreduce() {
        return this.arraypersona.reduce((acc, elemento) => acc = acc + elemento.dinero, 0);
    }
}


class Persona {
    constructor({ colorOjos, altura, nombre, edad, dinero }) {
        this.colorOjos = colorOjos;
        this.altura = altura;
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
}
const nacimientoUno = new Mundo();
function agregandoHumanos() {
    const colorOjos = prompt("ingrese color de ojos");
    const altura = prompt("Ingrese altura");
    const nombre = prompt("ingrese nombre");
    const edad = parseInt(prompt("Ingrese edad"));
    const dinero = parseFloat(prompt("Ingrese el dinero disponible"));

    const nuevosHumanosCargados = new Persona({
        colorOjos: colorOjos,
        altura: altura,
        nombre: nombre,
        edad: edad,
        dinero: dinero,
    });
    console.log("PersonaDos linea 45 ", nuevosHumanosCargados);
    nacimientoUno.pushearHumano(nuevosHumanosCargados);
    deseaContinua(nuevosHumanosCargados);
}

agregandoHumanos(); */
////////////////////




////////

///////


///////////////
/* function deseaContinua(nuevosHumanosCargados) {
    const continuar = confirm("Desea continuar???");
    console.log(nuevosHumanosCargados);

    if (continuar) {
        agregandoHumanos();
    } else {
        ////const usuario = prompt("Ingrese nombre que desea bussscar");
        ////const accediendoNombre = nuevosHumanosCargados.dinero
        nuevosHumanosCargados.dinero += nuevosHumanosCargados.dinero
        console.log(nuevosHumanosCargados, " accediendoNombre"); */
/* const AplicandoMetodoFind = nacimientoUno.buscarHumano();
console.log(AplicandoMetodoFind);
const accesoIndice = AplicandoMetodoFind.nombre;
console.log(accesoIndice);
const metodoSome = nacimientoUno.humanoYaExiste(accesoIndice);
console.log(metodoSome);
if(metodoSome){
    const totalobtenido = nacimientoUno.aplicandoMetodoreduce();
    console.log(totalobtenido, " Finalmente aplicado metodo reduce");
}else {
    console.log("linea 85 ");
} */
/* 
    }
} */
/////////


///////

/* nacimientoUno.pushearHumano(personaDos);
const humanoDos = nacimientoUno.humanoYaExiste(personaDos);
console.log(humanoDos); */
/* 
const array = [
    { id: 1, nombre: 'Objeto 1' },
    { id: 2, nombre: 'Objeto 2' },
    { id: 3, nombre: 'hola fer' },
];

nuevoArray = array[2];
console.log(nuevoArray)
console.log(nuevoArray.nombre);
 */
/////////const listaArray = [6, "fer", true, ["perro", "gato", ["comida", "desayuno"]]];
///console.log(listaArray);
/* console.log(listaArray[3][2].length);
console.log(listaArray[3][2])
for(let i = 0; i < listaArray.length; i++){
    console.log("Linea 112 ", listaArray[i]);
}  */
/* 
const arrayProductos = [{
    categoria: "electronicos",
    nombre: "parlante con bluetooth",
    marca: "philco",
    codigo: "ADR999",
    stock: 4,
    precio: 32000,
},
{
    categoria: "electronicos",
    nombre: "playstation 5",
    marca: "sony",
    stock: 10,
    precio: 1000000,
},
];
const producto ={
    categoria: "electronicos",
    nombre: "playstation 5",
    marca: "sony",
    codigo: "ADR998",
    stock: 10,
    precio: 100000,
}

const buscarPorIndice = arrayProductos.findIndex((el)=> el.nombre === producto.nombre);
console.log(buscarPorIndice);
const nuevoStock = sumarDeStock(buscarPorIndice);
console.log(nuevoStock);


function sumarDeStock(indice){
    return arrayProductos[indice].stock += producto.stock
} */



///////////////////////////////////// prueba Utilizando localStorage.

/* let productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        precio: 19.99,
        categoria: 'Electrónicos'
    },
    {
        id: 2,
        nombre: 'Producto 2',
        precio: 29.99,
        categoria: 'Ropa'
    },
    {
        id: 3,
        nombre: 'Producto 3',
        precio: 9.99,
        categoria: 'Hogar'
    },
    
];
const deposito = JSON.parse(localStorage.getItem("productos")) || []; */

///console.log(deposito);

/* function agregarProductos (prod){
    deposito.push(prod);
    localStorage.setItem("productos", JSON.stringify(prod));
}
agregarProductos(productos);


const depositoFinal = JSON.parse(localStorage.getItem("productos"));

console.log(depositoFinal, " depositoFinal"); */


///////////////////////////////


/* var arrayObjetos = [
    {
        "id": 1,
        "nombre": "Producto 1",
        "precio": 19.99,
        "cantidad": 10
    },
    {
        "id": 2,
        "nombre": "Producto 2",
        "precio": 29.99,
        "cantidad": 5
    },
    {
        "id": 3,
        "nombre": "Producto 3",
        "precio": 14.5,
        "cantidad": 20
    },
    {
        "id": 3,
        "nombre": "Producto 3",
        "precio": 14.5,
        "cantidad": 20
    }
];


localStorage.setItem("arrayObjetos", JSON.stringify(arrayObjetos));


 */

/////////////////////////////
/* Desafío de programación #16: Crear una función que dado un número retorne 
un Boolean (true/false) dependiendo si es primo o no. */


////// Numeros primos son aquellos que pueden ser divididos por 1 y si mismos .
/// numero % 1 === 0;
/// numero % numero === 0;
/// Si el numero tiene resto.



/////////////////////////////////////////////////////////////////////////////////////

/* metodo sort */



const productos = [
    {
        categoria: "carne",
        nombre: "bife de chorizo",
        marca: "coto",
        codigo: "AUR980",
        stock: 100,
        precio: 1000,
    },
    {
        categoria: "carne",
        nombre: "vacio",
        marca: "coto",
        codigo: "AUR981",
        stock: 100,
        precio: 3000,
    },
    {
        categoria: "carne",
        nombre: "entraña",
        marca: "coto",
        codigo: "AUR282",
        stock: 200,
        precio: 1500,
    },
    {
        categoria: "carne",
        nombre: "tira de asado",
        marca: "coto",
        codigo: "AUR283",
        stock: 300,
        precio: 2500,
    },
    {
        categoria: "carne",
        nombre: "chorizo",
        marca: "coto",
        codigo: "AUR984",
        stock: 100,
        precio: 2000,
    }
];




function ordenarProductosPorPrecioAscendente(){
    return productos.sort((a, b)=> a.precio < b.precio);
}
function ordenarProductosPorPrecioDescendente(){
    return productos.sort((a, b)=> a.precio > b.precio);

}
const ordenarPorPrecio = (e)=>{
    let resultado;
    const eventoBtn = e.target.dataset.id;
    console.log(eventoBtn, " eventoBtn linea 289")
    if(eventoBtn === "descendente"){
        resultado = ordenarProductosPorPrecioDescendente();
    }else{
        resultado = ordenarProductosPorPrecioAscendente()
    }
    console.log(resultado);
    renderizarProductos(resultado);
}
function ordenarproducto(){
    const botonOrdenPrecio = document.getElementsByClassName("boton-precio-ordenado");
    for(const boton of botonOrdenPrecio){
        boton.addEventListener("click", ordenarPorPrecio);
    }
    
}

ordenarproducto();










////////////////////////////////////////
const buscarProducto = () => {
    const inputProd = document.getElementById("input-producto-filtrado");
    const nombreProducto = inputProd.value.toLowerCase();
    ///console.log(nombreProducto);
    const productoFiltrado = filtrarproductoPorNombre(nombreProducto);
    //console.log(productoFiltrado, " linea 312 productoFiltrado");
    renderizarProductos(productoFiltrado);
}
function capturarNombreProducto() {
    const botonBuscarprod = document.getElementById("button-producto-filtrado");
    botonBuscarprod.addEventListener("click", buscarProducto);
}


















///////////////////////////////////////////////////
function filtrarproductoPorNombre(prod){
    return productos.filter((el)=> el.nombre.toLowerCase().includes(prod));
}
capturarNombreProducto();
//////////////////////////////////////////////////////
function renderizarProductos(prod) {
    ///console.log(prod, " linea 310");
    const sectionContainer = document.getElementById("section-container");
    sectionContainer.innerHTML = "";
    prod.forEach((el) => {
        const cardProducto = document.createElement("div");
        cardProducto.setAttribute("class", "card-producto");
        cardProducto.innerHTML += `
                                <p>Categoria: ${el.categoria}</p>
                                <p>Nombre: ${el.nombre}</p>
                                <p>Marca: ${el.marca}</p>
                                <p>Codigo: ${el.codigo}</p>
                                <p>Stock: ${el.stock}</p>
                                <p>Precio: $${el.precio}</p>`;
        sectionContainer.appendChild(cardProducto);
    })
}