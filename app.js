
class fuente {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        
    }
}

const carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Array de carrito

// fuentes
const troncosYRueda = new fuente ('troncosYRueda', 10000);
const troncos = new fuente ('troncos', 10000);
const patos = new fuente ('patos', 8000);
const barriles = new fuente ('barriles', 7000);
const aljibe = new fuente ('aljibe', 7000);
const elefantes = new fuente ('elefantes', 8000);

let total = 0;

// elementos
const elementoTotal = document.getElementById("totalCarrito");
elementoTotal.innerText = total;
const elementoFuentes = document.querySelector("#productos")


document.getElementById("btnTroncosRueda").addEventListener("click", () => comprar(troncosYRueda));
document.getElementById("btnTroncos").addEventListener("click", () => comprar(troncos));
document.getElementById("btnPatos").addEventListener("click", () => comprar(patos));
document.getElementById("btnBarriles").addEventListener("click", () => comprar(barriles));
document.getElementById("btnAljibe").addEventListener("click", () => comprar(aljibe));
document.getElementById("btnElefante").addEventListener("click", () => comprar(elefantes));


function comprar(fuente) {
    carrito.push(fuente);
    // guardamos en el storage nuestro array de productos
    localStorage.setItem('carrito', JSON.stringify(carrito));
    total += fuente.precio;
    actualizarHTML();
   
  }

 function actualizarHTML(){
    elementoFuentes.innerHTML = '';
    for (const fuente of carrito) {
        let productoFuente = 
        `<div class='fuentes'>
           <p> ${fuente.nombre} </p>
           <p>   ${fuente.precio}</p>
        </div>`;
        elementoFuentes.innerHTML += productoFuente;
    }
 }






