class Fuente {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Array de carrito
  
  // fuentes
  
  const troncosYRueda = new Fuente("troncosYRueda", 10000);
  const troncos = new Fuente("troncos", 10000);
  const patos = new Fuente("patos", 8000);
  const barriles = new Fuente("barriles", 7000);
  const aljibe = new Fuente("aljibe", 7000);
  const elefantes = new Fuente("elefantes", 8000);
  
  // Agregar los eventos una vez que el DOM esté completamente cargado
  document.getElementById("btnTroncosRueda").addEventListener("click", () => comprar(troncosYRueda));
  document.getElementById("btnTroncos").addEventListener("click", () => comprar(troncos));
  document.getElementById("btnPatos").addEventListener("click", () => comprar(patos));
  document.getElementById("btnBarriles").addEventListener("click", () => comprar(barriles));
  document.getElementById("btnAljibe").addEventListener("click", () => comprar(aljibe));
  document.getElementById("btnElefante").addEventListener("click", () => comprar(elefantes));
  
  let total = 0;
  
  // elementos
  const elementoTotal = document.getElementById("dinero");
  
  const elementoFuentes = document.querySelector(".productos");
  
  localStorage.setItem("carrito", JSON.stringify(carrito));
  
  function comprar(fuente) {
    carrito.push(fuente);
  
    total += fuente.precio;
    actualizarHTML();
  }
  function actualizarHTML() {
     
      for (const fuente of carrito) {
        let productoFuente = `
               <p> ${fuente.nombre} </p>
               <p>  ${fuente.precio}</p>
            `;
        elementoFuentes.innerHTML += productoFuente;
      }
      elementoTotal.innerText = total; 
    }
  
  
  
  